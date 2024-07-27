const { EmbedBuilder } = require("discord.js");
const smsBomber = require("../modules/sms.js");

module.exports = { 
    name: "kappibomber",
    usage: "/kappibomber <number> <amount>",
    options: [
        {
            name: "number",
            description: "Number (e.g., 5523313131)",
            type: 3,
            required: true
        },
        {
            name: "amount",
            description: "Amount",
            type: 4,
            required: true
        }
    ],
    category: "Bot", 
    description: "Kappi Bomber",
    run: async (client, interaction) => {
        interaction.deferReply();
        let number = interaction.options.getString("number");
        let amount = interaction.options.getInteger("amount");
        if (!number) return interaction.editReply({ content: "Please enter a number.", ephemeral: true });
        if (number.toString().length > 10) return interaction.editReply({ content: "Please enter a valid number.", ephemeral: true });
        if (isNaN(amount)) return interaction.editReply({ content: "Please enter an amount.", ephemeral: true });
        
        if (amount > 100) return interaction.editReply({ content: "You can send a maximum of 100 messages.", ephemeral: true });
        if (amount < 1) return interaction.editReply({ content: "You can send a minimum of 1 message.", ephemeral: true });

        let embed = new EmbedBuilder()
            .setTitle("Kappi Sms Bomber")
            .setDescription(`Sending **${amount}** messages to **${number}**!`)
            .setColor("#800080") 
            .setFooter({ text: "Kappi Bomber", iconURL: client.user.avatarURL() })
            .setTimestamp()
            .setThumbnail(client.user.avatarURL());

        setTimeout(async () => {
            smsBomber(number, amount);
            try {
                await interaction.editReply({ embeds: [embed] });
            } catch (e) {
                console.log(e);
            }
        }, 5000);
    }
}
