<template>
<SwitchDark />
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
                <img src="../../assets/logo.svg" alt="" style="margin-bottom: 30px">
                <el-form
                    ref="loginFormRef"
                    :model="loginForm"
                    :rules="loginRules"
                    label-position="left"
                    status-icon
                    label-width="80px"
                    size="large"
                >
                    <el-form-item label="Email" prop="email" class="login-form-item">
                        <el-input type="text" v-model="loginForm.email" placeholder="admin/users" />
                    </el-form-item>
                    <el-form-item label="Password" prop="password" class="login-form-item">
                        <el-input type="password" v-model="loginForm.password" placeholder="12345678" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleLogin(loginFormRef)">Login</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup name="Login">
import { reactive, ref } from 'vue'
import SwitchDark from '../../components/SwitchDark/index.vue'
import http from '../../utils/http';
import md5 from 'js-md5'
import { useGlobalStore } from '../../store';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const globalStore = useGlobalStore()
const router = useRouter()

const loginFormRef = ref()

const loginForm = reactive({
    email: '',
    password: ''
})

const loginRules = reactive({
    email: [
        {required: true, message: 'Please Enter Your Email', trigger: 'blur'}
    ],
    password: [
        {required: true, message: 'Please Enter Your Password', trigger: 'blur'},
        // {min: 6, max: 16, message: 'Length should be 3 to 5', trigger: 'blur'}
    ]
});

const handleLogin = (loginRef)=>{
    if(!loginRef) return
    // console.log(login);
    loginRef.validate((valid)=>{
        if(valid){
            const loginData = {
                email: loginForm.email,
                password: md5(loginForm.password)
            }
            http.post('/user/login', loginData).then((res)=>{
                console.log(res);
                globalStore.setToken(res.data.token)
                globalStore.setUserInfo(res.data)
                ElMessage.success("登录成功！");
                router.push('/home/index')
            })
        }
        
    })
}

</script>

<style lang="scss">
.login-container{
    width: 100%;
    height: calc(100vh - 32px);
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

            .login-form-item{
                margin-bottom: 40px;
            }
        }
    }
}
</style>