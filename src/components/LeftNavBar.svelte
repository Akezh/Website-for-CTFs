<script lang="ts">
    import { userStore } from "../stores/userStore.ts";

    const signOut = () => {
        localStorage.removeItem('accessToken');
        userStore.set({ isLoggedIn: false, teamName: undefined, score: undefined, members: undefined });
    }
</script>

<aside class="w-64 fixed top-16" aria-label="Sidebar">
    <div class="overflow-y-auto pt-3 px-3 bg-gray-50" style="background-color: #0c1221; height: 100vh">
        <ul class="space-y-3">
            <li>
                <a href="/" class="flex items-center p-2 pl-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 13C21 15.3869 20.0518 17.6761 18.364 19.364C16.6761 21.0518 14.3869 22 12 22C9.61305 22 7.32387 21.0518 5.63604 19.364C3.94821 17.6761 3 15.3869 3 13L3.03 4.43C5.68 2.88 8.76 2 12.05 2C15.3 2 18.36 2.87 21 4.38V13ZM13 19.93C16.39 19.44 19 16.5 19 13V5.59C16.9 4.57 14.54 4 12.05 4C9.5 4 7.08 4.6 4.94 5.66L5 13C5 16.5 7.63 19.44 11 19.93V18H13V19.93ZM11 16H8L6 13L9 14H10L11 13H13L14 14H15L18 13L16 16H13L12 15L11 16ZM6 9.03C6.64 8.4 7.5 8.05 8.5 8.05C9.45 8.05 10.34 8.4 11 9.03C10.34 9.65 9.45 10 8.5 10C7.5 10 6.64 9.65 6 9.03ZM13 9.03C13.64 8.4 14.5 8.05 15.5 8.05C16.45 8.05 17.34 8.4 18 9.03C17.34 9.65 16.45 10 15.5 10C14.5 10 13.64 9.65 13 9.03Z" fill="#748499"/>
                    </svg>

                    <span class="ml-4 uppercase text-sm">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="/challenges" class="flex items-center p-2 pl-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H6V2H4V20H3V22H7V20H6V15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4V4Z" fill="#748499"/>
                    </svg>

                    <span class="flex-1 ml-4 whitespace-nowrap uppercase text-sm">Challenges</span>
                </a>
            </li>
            <li>
                <a href="/leaderboard" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 21H3C2.45 21 2 20.55 2 20V10C2 9.45 2.45 9 3 9H6.5C7.05 9 7.5 9.45 7.5 10V20C7.5 20.55 7.05 21 6.5 21ZM13.75 3H10.25C9.7 3 9.25 3.45 9.25 4V20C9.25 20.55 9.7 21 10.25 21H13.75C14.3 21 14.75 20.55 14.75 20V4C14.75 3.45 14.3 3 13.75 3ZM21 11H17.5C16.95 11 16.5 11.45 16.5 12V20C16.5 20.55 16.95 21 17.5 21H21C21.55 21 22 20.55 22 20V12C22 11.45 21.55 11 21 11Z" fill="#748499"/>
                    </svg>

                    <span class="flex-1 ml-4 whitespace-nowrap uppercase text-sm">Leaderboard</span>
                </a>
            </li>

            {#if !$userStore.isLoggedIn}
                <li>
                    <a href="/login" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C9.243 2 7 4.243 7 7V10H6C5.46957 10 4.96086 10.2107 4.58579 10.5858C4.21071 10.9609 4 11.4696 4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10H17V7C17 4.243 14.757 2 12 2ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7ZM13 17.723V20H11V17.723C10.6504 17.5228 10.3697 17.2213 10.1948 16.8584C10.02 16.4954 9.95928 16.0879 10.0207 15.6898C10.0821 15.2916 10.2627 14.9214 10.5388 14.6279C10.8148 14.3345 11.1733 14.1316 11.567 14.046C11.8594 13.9813 12.1626 13.9832 12.4542 14.0513C12.7459 14.1194 13.0185 14.2521 13.252 14.4397C13.4855 14.6272 13.6739 14.8647 13.8034 15.1348C13.9328 15.4049 14 15.7005 14 16C13.9994 16.3497 13.9067 16.6932 13.7311 16.9956C13.5556 17.2981 13.3034 17.549 13 17.723V17.723Z" fill="#748499"/>
                        </svg>
                        <span class="flex-1 ml-4 whitespace-nowrap uppercase text-sm">Login</span>
                    </a>
                </li>
                <li>
                    <a href="/register" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-4 whitespace-nowrap uppercase text-sm">Register</span>
                    </a>
                </li>
            {:else}
                <li style="cursor: pointer;">
                    <a on:click={signOut} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C9.243 2 7 4.243 7 7V10H6C5.46957 10 4.96086 10.2107 4.58579 10.5858C4.21071 10.9609 4 11.4696 4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10H17V7C17 4.243 14.757 2 12 2ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7ZM13 17.723V20H11V17.723C10.6504 17.5228 10.3697 17.2213 10.1948 16.8584C10.02 16.4954 9.95928 16.0879 10.0207 15.6898C10.0821 15.2916 10.2627 14.9214 10.5388 14.6279C10.8148 14.3345 11.1733 14.1316 11.567 14.046C11.8594 13.9813 12.1626 13.9832 12.4542 14.0513C12.7459 14.1194 13.0185 14.2521 13.252 14.4397C13.4855 14.6272 13.6739 14.8647 13.8034 15.1348C13.9328 15.4049 14 15.7005 14 16C13.9994 16.3497 13.9067 16.6932 13.7311 16.9956C13.5556 17.2981 13.3034 17.549 13 17.723V17.723Z" fill="#748499"/>
                        </svg>
                        <span class="flex-1 ml-4 whitespace-nowrap uppercase text-sm">Sign out</span>
                    </a>
                </li>
            {/if}

        </ul>
    </div>
</aside>
