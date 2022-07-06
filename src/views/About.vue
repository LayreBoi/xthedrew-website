<script>
export default {
    data() {
        return {
            loadError: false,
            discoData: {
                name: "loading...",
                instant_invite: "",
                members: []
            }
        }
    },

    mounted() {
        this.getDiscordData();
    },

    methods: {
        async getDiscordData() {
            function handleErrors(response) {
                if (!response.ok) this.loadError = true;
                return response;
            }

            let data = await fetch(
                "https://discord.com/api/guilds/797407215002714133/widget.json"
            )   .then(handleErrors)
                .then(async function(data) {
                    return data;
                });
    
            data = await data.json();
            this.discoData = data;
        },

        checkMemberStatus(status) {
            var statcol = '#444';

            switch (status) {
                case "online": statcol = '#57F287'; break;
                case "idle"  : statcol = '#FEE75C'; break;
                case "dnd"   : statcol = '#EB459E'; break;
            }

            return statcol;
        },

        openInvite() {
            window.open(this.discoData.instant_invite, "_blank");
        }
    }
}
</script>

<template>
    <div class="pagecont_About"> <!-- To avoid problems with transitions -->
        <h3>Biography</h3>
        <div class="field">
            xtdrew (or xthedrew) is a young programmer from Austria, developing websites and games. He developed several web applications and discord bots such as Amih1ri, Lillie, Amber and Kazane. He also known as a music artist called LayreBoi.
        </div>
        <div class="spacer-small"></div>
        <h3>Contact</h3>
        <div class="field">
            <span class="boldtext">Email:</span> <a href="mailto:layreboi@mailayre.com">layreboi@mailayre.com</a><br>
            <span class="boldtext">Discord:</span> LayreBoi_xthedrew#7646
        </div>
        <div class="spacer-small"></div>
        <h3>Socials</h3>

        The socials are in the <a target="_blank" href="https://next.layreboi.me">LayreBoi Next</a> website. <!-- NEXT mode -->
        <br>You can also visit my <a target="_blank" href="https://www.youtube.com/channel/UCzN4nVLbjXdGXMaTfS1BVzg">YouTube channel</a> and my <a target="_blank" href="https://gamejolt.com/@xthedrew">GameJolt</a> account!
        
        <div class="spacer-small"></div>
        <div class="discordfield" v-if="!loadError">
            <h3>{{ discoData.name }}</h3>
            <div class="field">
                <div class="MemberArray">
                    <div class="Member" v-for="member in discoData.members.slice(Math.max(discoData.members.length - 8, 0))" :key="member">
                        <img :src="member.avatar_url" :alt="member.username" class="MemberAvatar" :style="`border: 2px solid ${checkMemberStatus(member.status)}`">
                    </div>
                </div>
                <div class="JoinButton" v-on:click="openInvite()">Join the server!</div>
            </div>
        </div>
        <div class="spacer-small"></div>
    </div>
</template>

<style scoped lang="scss">
.field {   
    display: flex;
    flex-direction: column;
    align-items: center;
    .MemberArray{
        display: grid;
        gap: 7.5px;
        grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
        width: 50%;
        .Member {
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;
            justify-content: center;
            padding: 2px;
            .MemberAvatar {
                width: 75px;
                height: 75px;
                border-radius: 100px;
            }
        }
    }

    .JoinButton {
        padding: 4px 0;
        background-color: #5865f2;
        width: 150px;
        margin: 10px 0;
        border-radius: 9px;
        transition: 0.25s ease-in-out all;
        color: white;
    }

    .JoinButton:hover {
        cursor: pointer;
        transition: 0.25s ease-in-out all;
        transform: scale(1.1);
        background-color: #7289da;
    }
}
</style>

<style lang="scss">
.pagecont_About {
    border-radius: 18px;
    background-color: var(--color-bg);
    transition: var(--transition-mode);
}
.field {
    border: var(--color-fg) dashed 2px;
    border-radius: 9px;
    padding: 20px;
    transition: var(--transition-mode);
    .boldtext {
        font-weight: bolder;
        transition: var(--transition-mode);
    }
}

.discordfield {
    transition: var(--transition-mode);
}
</style>
