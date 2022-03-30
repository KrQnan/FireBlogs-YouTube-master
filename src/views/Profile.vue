<template>
    <div>
        <div class="profile">
            <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
            <div class="container">
                <h2>Account Settings</h2>
                <div class="profile-info">
                    <div class="initials">{{$store.state.profileInitials}}</div>
                    <div class="admin-badge">
                        <adminIcon class="icon" />
                        <span>Admin</span>
                    </div>
                    <div class="input">
                        <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" v-model="firstName">
                    </div>
                    <div class="input">
                        <label for="lastName">Last Name:</label>
                        <input type="text" id="lastName" v-model="LastName">
                    </div>
                    <div class="input">
                        <label for="username">Username:</label>
                        <input type="text" id="username" v-model="Username">
                    </div>
                    <div class="input">
                        <label for="email">Email</label>
                        <input disabled type="text" id="email" v-model="email">
                    </div>
                    <button>Save Changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Modal from "../components/Modal.vue";
    export default {
    components: { Modal }
}
</script>
<style lang="scss" scoped>
    .profile{
        .container{
            max-width: 1000px;
            padding: 60px 25px;

            h2{
                text-align: center;
                margin-bottom: 16px;
                font-weight: 300;
                font-size:32px;
            }

            .profile-info{
                border-radius: 8px;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px 1px rgba(0,0,0,0.6);
                padding:32px;
                background-color: #f1f1f1;
                display: flex;
                flex-direction: column;
                max-width: 600px;
                margin: 32px auto;

                .initials{
                    position: initial;
                    width:80px;
                    height: 80px;
                    font-size:32px;
                    background-color: #303030;
                    color: #fff;
                    display: flex;
                    align-self: center;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }

                .admin-badge{
                    display: flex;
                    align-self: center;
                    color: #fff;
                    font-size: 14px;
                    padding: 8px 24px;
                    border-radius: 8px;
                    background-color: #303030;
                    margin: 16px 0;
                    text-align: center;
                    text-transform: capitalize;

                    .icon {
                        width: 14px;
                        height: auto;
                        margin-right: 8px;
                    }
                }
            }
        }
    }
</style>