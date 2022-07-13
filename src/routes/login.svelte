<script lang="ts">
    let teamName = '';
    let password = '';
    let error = '';

    function validate() {
        if (teamName.length < 3) {
            error = 'Team name should have at least 3 symbols.'
            return false;
        }
        if (password.length < 8) {
            error = 'Password should have at least 8 symbols.';
            return false;
        }

        error = '';
        return true;
    }

    function login() {
        const status = validate();

        if (status) {
            // TODO: fetch API
            console.log('submit')
        } else {
            console.log('false')
        }
    }
</script>

<div class="p-8 mx-64" style="background-color: rgba(255,255,255,.01)">
    <p class="uppercase text-3xl font-bold mb-8" style="color: #e85154">LOGIN</p>
    <form>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={teamName} type="text" name="floating_first_name" id="floating_team_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_team_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team name</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input bind:value={password} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <button on:click|preventDefault={login} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <p class="text-sm mt-8 text-orange-700">{error}</p>
    </form>
</div>
