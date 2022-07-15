<script lang="ts">
    import axios from "axios";

    let teamName = '';
    let password = '';

    let error = '';
    let success = '';
    let isPromiseLoading = false;

    const validate = () => {
        if (teamName.length < 3) {
            error = 'Team name should have at least 3 symbols.'
            return false;
        }
        if (password.length < 6) {
            error = 'Password should have at least 6 symbols.';
            return false;
        }

        error = '';
        return true;
    }

    const login = async () => {
        const status = validate();
        if (!status) return;

        isPromiseLoading = true;

        try {
            const res = await axios.post('http://localhost:8000/api/login', {
                username: teamName,
                password
            });
            const { token } = res.data;

            window.localStorage.setItem('accessToken', token);
            success = 'You have successfully logged in. Redirecting to dashboard page...';

            await new Promise((resolve => {
                setTimeout(() => resolve(), 2000);
            }))

            window.location.replace("/");
        } catch (err) {
            error = err;
        } finally {
            isPromiseLoading = false;
        }
    }
</script>

<div class="p-8" style="background-color: rgba(255,255,255,.01); margin-left: 20%; margin-right: 20%">
    <p class="uppercase text-3xl font-bold mb-8" style="color: #e85154">LOGIN</p>
    <form on:submit|preventDefault={login}>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={teamName} type="text" name="floating_first_name" id="floating_team_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_team_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team name</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={password} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>


        {#if isPromiseLoading && !success}
            <img alt="loader" src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" height="24" width="24">
        {:else if isPromiseLoading && success}
            <div class="flex gap-4 items-center justify-between">
                <img alt="loader" src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" height="24" width="24s">
                {#if success}<p class="text-sm text-green-500">{success}</p>{/if}
            </div>
        {:else}
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            <p class="text-sm mt-8 text-orange-700">{error}</p>
        {/if}
    </form>
</div>
