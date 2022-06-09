<template>
    <div class="login-container">
        <div class="login-content">
            <div class="login-left">
                <h1 class="login-title">Welcome</h1>
                <p class="login-text">
                    to the demo application made with AdminBro - the best admin framework for Node.js apps, based on React. 
                </p>
                <div class="flex-center">
                    <img src="../../assets/react.svg" width="35%" />
                </div>
                
            </div>
            <div class="login-right">
                <img src="../../assets/logo.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup name="Login">

</script>

<style lang="scss">
.login-container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .login-content{
        width: 50%;
        height: 60vh;
        border-radius: 1px;
        display: flex;
        box-shadow: 1px 1px 3px rgb(200, 200, 200);

        .login-left{
            width: 50%;
            height: 100%;
            background-color: #4268F6;

            .login-title{
                color: #fff;
                margin: 40px 0 32px 40px;
                font-size: 32px;
                font-weight: 300;
            }

            .login-text{
                color: #fff;
                margin-left: 40px;
                margin-right: 40px;
                font-size: 15px;
            }

            .flex-center{
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 20px;
            }
        }

        .login-right{
            width: 50%;
            padding: 10px 20px 0 20px;
        }
    }
}
</style>