<script lang="ts">
    import axios from 'axios';
    import { API_URL } from '../config';

    let username = '';
    let teamName = '';
    let member1 = '';
    let member2 = '';
    let member3 = '';
    let password = '';
    let confirmPassword = '';
    let isPromiseLoading = false;

    let error = '';
    let success = '';

    const validate = () => {
        if (username.indexOf(' ') >= 0) {
            error = 'Username should not have spaces';
            return false;
        }
        if (username.length < 3) {
            error = 'Username should have at least 3 symbols.'
            return false;
        }
        if (teamName.length < 3) {
            error = 'Team name should have at least 3 symbols.'
            return false;
        }
        if (member1.length < 3 && member2.length < 3 && member3.length < 3) {
            error = 'At least one member is required.'
            return false;
        }
        if (password.length < 6 || confirmPassword.length < 6) {
            error = 'Password should have at least 6 symbols.';
            return false;
        }
        if (password !== confirmPassword) {
            error = 'Passwords do not match.';
            return false;
        }

        error = '';
        return true;
    }

    const register = async () => {
        const status = validate();
        if (!status) return;

        isPromiseLoading = true;

        const members = [member1, member2, member3].filter(member => member).join(', ');

        try {
            await axios.post(`${API_URL}/api/register`, {
                username,
                members,
                name: teamName,
                password
            });

            success = 'You have successfully registered. Redirecting to login page...';

            await new Promise((resolve => {
                setTimeout(() => resolve(), 1000);
            }))

            window.location.replace("/login");
        } catch (err) {
            error = 'Username or team name is already taken.';
        } finally {
            isPromiseLoading = false;
        }
    }
</script>

<div class="p-8" style="background-color: rgba(255,255,255,.01); margin-left: 20%; margin-right: 20%">
    <p class="uppercase text-3xl font-bold mb-2" style="color: #e85154">REGISTER</p>
    <p class="mb-8 text-sm">Only one member must register for the entire team.</p>
    <form on:submit|preventDefault={register}>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={username} type="text" name="floating_first_name" id="floating_username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label onerror="error" for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={teamName} type="text" name="floating_first_name" id="floating_team_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label onerror="error" for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team name</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={member1} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team member name 1</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={member2} type="text" name="floating_first_name" id="floating_second_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team member name 2</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={member3} type="text" name="floating_first_name" id="floating_third_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team member name 3</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={password} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={confirmPassword} type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        </div>

        {#if isPromiseLoading && !success}
            <img alt="loader" src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" height="24" width="24">
        {:else if isPromiseLoading && success}
            <div class="flex gap-4 items-center justify-between">
                <img alt="loader" src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" height="24" width="24s">
                {#if success}<p class="text-sm text-green-500">{success}</p>{/if}
            </div>
        {:else}
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Register</button>
            {#if error}<p class="text-sm mt-8 text-orange-700">{error}</p>{/if}
        {/if}
    </form>
</div>
