interface IconsProps {
    height?: number;
    width?: number;
    className?: string;
    fillColor1?: string;
    fillColor2?: string;
}

export const HomeIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 460.298 460.297"
            enableBackground="new 0 0 460.298 460.297"
        >
            <g>
                <g>
                    <path
                        d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041
			c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629
			c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939
			z"
                    />
                    <path
                        d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816
			c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245
			c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136
			c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998
			L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125
			c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z"
                    />
                </g>
            </g>
        </svg>
    );
};

export const LogoIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            className={className}
            width="162"
            height="46"
            viewBox="0 0 162 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M25 45C37.1503 45 47 35.1503 47 23C47 10.8497 37.1503 1 25 1C12.8497 1 3 10.8497 3 23C3 35.1503 12.8497 45 25 45Z"
                fill="black"
            />
            <path
                d="M25.7837 6.50966C22.0684 6.38058 18.4217 7.53257 15.4548 9.77253C15.1671 9.98874 14.9311 10.2662 14.7639 10.5849C14.5967 10.9035 14.5024 11.2553 14.488 11.6149C14.4735 11.9745 14.5391 12.3327 14.6802 12.6638C14.8212 12.9949 15.0342 13.2904 15.3035 13.529C16.1588 14.3375 17.476 14.4008 18.4055 13.6789C20.6815 11.9076 23.5387 11.0536 26.4134 11.2852C29.2881 11.5168 31.9717 12.8173 33.9347 14.9302C34.746 15.7689 34.7708 17.0903 33.9925 17.9593C33.7969 18.1691 33.5619 18.3383 33.3009 18.4572C33.0398 18.5762 32.7579 18.6425 32.4713 18.6525C32.1846 18.6624 31.8988 18.6158 31.6302 18.5153C31.3615 18.4147 31.1153 18.2622 30.9056 18.0665L30.7998 17.9593C29.8209 16.8859 28.5403 16.1336 27.1261 15.8012C25.7119 15.4688 24.2303 15.5718 22.8757 16.0967C21.5212 16.6216 20.357 17.5438 19.5361 18.7424C18.7151 19.9409 18.2758 21.3596 18.2758 22.8123C18.2758 24.2651 18.7151 25.6838 19.5361 26.8823C20.357 28.0809 21.5212 29.0031 22.8757 29.528C24.2303 30.0529 25.7119 30.1559 27.1261 29.8235C28.5403 29.4911 29.8209 28.7388 30.7998 27.6654C31.1133 27.3145 31.5338 27.0768 31.9962 26.989C32.4585 26.9013 32.9369 26.9684 33.3572 27.18C33.6563 27.33 33.9166 27.5471 34.1178 27.8144C34.3191 28.0816 34.4558 28.3918 34.5173 28.7206C34.5788 29.0494 34.5634 29.388 34.4724 29.7099C34.3813 30.0319 34.2171 30.3284 33.9925 30.5763C32.0375 32.7163 29.3505 34.0446 26.463 34.2982C23.5755 34.5518 20.6981 33.7123 18.4 31.9458C17.9453 31.5993 17.3828 31.4245 16.8118 31.4522C16.2408 31.4799 15.6979 31.7082 15.2788 32.097C15.0112 32.3422 14.8013 32.6436 14.6641 32.9796C14.527 33.3156 14.466 33.6778 14.4856 34.0402C14.5052 34.4026 14.6049 34.7561 14.7775 35.0754C14.95 35.3946 15.1912 35.6716 15.4836 35.8865C17.5347 37.4076 19.9144 38.4254 22.4311 38.8579C24.9477 39.2903 27.5307 39.1254 29.9719 38.3763C32.4131 37.6272 34.644 36.3149 36.4849 34.5452C38.3258 32.7756 39.725 30.5981 40.5698 28.1884C41.4147 25.7787 41.6814 23.2042 41.3485 20.6725C41.0157 18.1408 40.0925 15.7227 38.6536 13.6132C37.2146 11.5038 35.3 9.76201 33.0643 8.52835C30.8286 7.2947 28.3342 6.60368 25.7824 6.51103L25.7837 6.50966ZM25.4813 26.8432C24.9516 26.8412 24.4276 26.7349 23.9391 26.5304C23.4506 26.3259 23.0071 26.0272 22.634 25.6513C22.2609 25.2754 21.9655 24.8297 21.7647 24.3396C21.5639 23.8496 21.4615 23.3248 21.4635 22.7952C21.4655 22.2656 21.5718 21.7415 21.7763 21.253C21.9808 20.7645 22.2795 20.321 22.6554 19.9479C23.0313 19.5748 23.477 19.2794 23.967 19.0786C24.4571 18.8778 24.9819 18.7754 25.5115 18.7774C26.5811 18.7812 27.6053 19.2098 28.3589 19.9688C29.1125 20.7278 29.5338 21.7551 29.5299 22.8247C29.5261 23.8943 29.0975 24.9186 28.3385 25.6722C27.5795 26.4258 26.5522 26.847 25.4826 26.8432H25.4813Z"
                fill="white"
            />
            <path
                d="M56.0816 23.2C56.0816 21.2773 56.5109 19.56 57.3696 18.048C58.2469 16.5173 59.4322 15.332 60.9256 14.492C62.4376 13.6333 64.1269 13.204 65.9936 13.204C68.1776 13.204 70.0909 13.764 71.7336 14.884C73.3762 16.004 74.5242 17.5533 75.1776 19.532H70.6696C70.2216 18.5987 69.5869 17.8987 68.7656 17.432C67.9629 16.9653 67.0296 16.732 65.9656 16.732C64.8269 16.732 63.8096 17.0027 62.9136 17.544C62.0362 18.0667 61.3456 18.8133 60.8416 19.784C60.3562 20.7547 60.1136 21.8933 60.1136 23.2C60.1136 24.488 60.3562 25.6267 60.8416 26.616C61.3456 27.5867 62.0362 28.3427 62.9136 28.884C63.8096 29.4067 64.8269 29.668 65.9656 29.668C67.0296 29.668 67.9629 29.4347 68.7656 28.968C69.5869 28.4827 70.2216 27.7733 70.6696 26.84H75.1776C74.5242 28.8373 73.3762 30.396 71.7336 31.516C70.1096 32.6173 68.1962 33.168 65.9936 33.168C64.1269 33.168 62.4376 32.748 60.9256 31.908C59.4322 31.0493 58.2469 29.864 57.3696 28.352C56.5109 26.84 56.0816 25.1227 56.0816 23.2ZM80.5138 15.64C79.8231 15.64 79.2444 15.4253 78.7778 14.996C78.3298 14.548 78.1058 13.9973 78.1058 13.344C78.1058 12.6907 78.3298 12.1493 78.7778 11.72C79.2444 11.272 79.8231 11.048 80.5138 11.048C81.2044 11.048 81.7738 11.272 82.2218 11.72C82.6884 12.1493 82.9218 12.6907 82.9218 13.344C82.9218 13.9973 82.6884 14.548 82.2218 14.996C81.7738 15.4253 81.2044 15.64 80.5138 15.64ZM82.4458 17.488V33H78.5258V17.488H82.4458ZM92.2547 33.252C90.9854 33.252 89.8467 33.028 88.8387 32.58C87.8307 32.1133 87.0281 31.488 86.4307 30.704C85.8521 29.92 85.5347 29.052 85.4787 28.1H89.4267C89.5014 28.6973 89.7907 29.192 90.2947 29.584C90.8174 29.976 91.4614 30.172 92.2267 30.172C92.9734 30.172 93.5521 30.0227 93.9627 29.724C94.3921 29.4253 94.6067 29.0427 94.6067 28.576C94.6067 28.072 94.3454 27.6987 93.8227 27.456C93.3187 27.1947 92.5067 26.9147 91.3867 26.616C90.2294 26.336 89.2774 26.0467 88.5307 25.748C87.8027 25.4493 87.1681 24.992 86.6267 24.376C86.1041 23.76 85.8427 22.9293 85.8427 21.884C85.8427 21.0253 86.0854 20.2413 86.5707 19.532C87.0747 18.8227 87.7841 18.2627 88.6987 17.852C89.6321 17.4413 90.7241 17.236 91.9747 17.236C93.8227 17.236 95.2974 17.7027 96.3987 18.636C97.5001 19.5507 98.1067 20.792 98.2187 22.36H94.4667C94.4107 21.744 94.1494 21.2587 93.6827 20.904C93.2347 20.5307 92.6281 20.344 91.8627 20.344C91.1534 20.344 90.6027 20.4747 90.2107 20.736C89.8374 20.9973 89.6507 21.3613 89.6507 21.828C89.6507 22.3507 89.9121 22.752 90.4347 23.032C90.9574 23.2933 91.7694 23.564 92.8707 23.844C93.9907 24.124 94.9147 24.4133 95.6427 24.712C96.3707 25.0107 96.9961 25.4773 97.5187 26.112C98.0601 26.728 98.3401 27.5493 98.3587 28.576C98.3587 29.472 98.1067 30.2747 97.6027 30.984C97.1174 31.6933 96.4081 32.2533 95.4747 32.664C94.5601 33.056 93.4867 33.252 92.2547 33.252ZM115.997 24.908C115.997 25.468 115.959 25.972 115.885 26.42H104.545C104.638 27.54 105.03 28.4173 105.721 29.052C106.411 29.6867 107.261 30.004 108.269 30.004C109.725 30.004 110.761 29.3787 111.377 28.128H115.605C115.157 29.6213 114.298 30.8533 113.029 31.824C111.759 32.776 110.201 33.252 108.353 33.252C106.859 33.252 105.515 32.9253 104.321 32.272C103.145 31.6 102.221 30.6573 101.549 29.444C100.895 28.2307 100.569 26.8307 100.569 25.244C100.569 23.6387 100.895 22.2293 101.549 21.016C102.202 19.8027 103.117 18.8693 104.293 18.216C105.469 17.5627 106.822 17.236 108.353 17.236C109.827 17.236 111.143 17.5533 112.301 18.188C113.477 18.8227 114.382 19.728 115.017 20.904C115.67 22.0613 115.997 23.396 115.997 24.908ZM111.937 23.788C111.918 22.78 111.554 21.9773 110.845 21.38C110.135 20.764 109.267 20.456 108.241 20.456C107.27 20.456 106.449 20.7547 105.777 21.352C105.123 21.9307 104.722 22.7427 104.573 23.788H111.937ZM117.85 25.244C117.85 23.6387 118.176 22.2387 118.83 21.044C119.483 19.8307 120.388 18.8973 121.546 18.244C122.703 17.572 124.028 17.236 125.522 17.236C127.444 17.236 129.031 17.7213 130.282 18.692C131.551 19.644 132.4 20.988 132.83 22.724H128.602C128.378 22.052 127.995 21.5293 127.454 21.156C126.931 20.764 126.278 20.568 125.494 20.568C124.374 20.568 123.487 20.9787 122.834 21.8C122.18 22.6027 121.854 23.7507 121.854 25.244C121.854 26.7187 122.18 27.8667 122.834 28.688C123.487 29.4907 124.374 29.892 125.494 29.892C127.08 29.892 128.116 29.1827 128.602 27.764H132.83C132.4 29.444 131.551 30.7787 130.282 31.768C129.012 32.7573 127.426 33.252 125.522 33.252C124.028 33.252 122.703 32.9253 121.546 32.272C120.388 31.6 119.483 30.6667 118.83 29.472C118.176 28.2587 117.85 26.8493 117.85 25.244ZM142.59 33.252C141.096 33.252 139.752 32.9253 138.558 32.272C137.363 31.6 136.42 30.6573 135.73 29.444C135.058 28.2307 134.722 26.8307 134.722 25.244C134.722 23.6573 135.067 22.2573 135.758 21.044C136.467 19.8307 137.428 18.8973 138.642 18.244C139.855 17.572 141.208 17.236 142.702 17.236C144.195 17.236 145.548 17.572 146.762 18.244C147.975 18.8973 148.927 19.8307 149.618 21.044C150.327 22.2573 150.682 23.6573 150.682 25.244C150.682 26.8307 150.318 28.2307 149.59 29.444C148.88 30.6573 147.91 31.6 146.678 32.272C145.464 32.9253 144.102 33.252 142.59 33.252ZM142.59 29.836C143.299 29.836 143.962 29.668 144.578 29.332C145.212 28.9773 145.716 28.4547 146.09 27.764C146.463 27.0733 146.65 26.2333 146.65 25.244C146.65 23.7693 146.258 22.64 145.474 21.856C144.708 21.0533 143.766 20.652 142.646 20.652C141.526 20.652 140.583 21.0533 139.818 21.856C139.071 22.64 138.698 23.7693 138.698 25.244C138.698 26.7187 139.062 27.8573 139.79 28.66C140.536 29.444 141.47 29.836 142.59 29.836ZM155.293 33.196C154.584 33.196 153.996 32.9813 153.529 32.552C153.081 32.104 152.857 31.5533 152.857 30.9C152.857 30.2467 153.081 29.7053 153.529 29.276C153.996 28.828 154.584 28.604 155.293 28.604C155.984 28.604 156.553 28.828 157.001 29.276C157.449 29.7053 157.673 30.2467 157.673 30.9C157.673 31.5533 157.449 32.104 157.001 32.552C156.553 32.9813 155.984 33.196 155.293 33.196Z"
                fill="black"
            />
        </svg>
    );
};

export const GiaSoc = ({ height, width, className }: IconsProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="28" viewBox="0 0 89 28">
            <defs>
                <linearGradient id="prefix__a" x1="0%" x2="98.078%" y1="46.989%" y2="53.011%">
                    <stop offset="0%" stopColor="#FF821D" />
                    <stop offset="100%" stopColor="#FF5B18" />
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0H88.667V28H0z" />
                <path
                    fill="url(#prefix__a)"
                    d="M8.377 22.562c2.56 0 4.798-.746 6.513-1.74l2.486-8.775h-7.98l-.92 3.53h3.356l-.696 2.337c-.596.273-1.342.472-2.311.472-2.138 0-3.903-1.268-3.903-3.704 0-3.206 2.411-5.916 5.916-5.916 1.864 0 3.281.77 4.3 1.79l3.232-3.132c-1.193-1.541-3.729-2.958-7.209-2.958C4.524 4.466 0 9.338 0 14.88c0 5.344 4.226 7.681 8.377 7.681zM24.808 7.548l.945-3.48H20.83l-.945 3.48h4.922zm-4.052 14.666l3.605-13.448h-4.723l-3.605 13.448h4.723zM33.981 7.498l4.499-3.157-4.3-1.417-3.829 4.574h3.63zm41.297-1.462l4.5-3.157-4.301-1.417-3.828 4.574h3.63zM26.474 22.488c1.566 0 2.734-.647 3.877-1.716l-.373 1.442h4.649l1.989-7.408c.174-.67.273-1.317.273-1.938 0-2.685-1.964-4.276-5.99-4.276-1.94 0-3.879.323-5.295.82l.67 3.43c.945-.372 2.362-.67 3.63-.67 1.64 0 2.312.571 2.312 1.441 0 .323-.075.597-.125.82l-.05.175c-1.068-.324-2.187-.522-3.405-.522-3.555 0-5.916 1.79-5.916 4.747 0 2.238 1.541 3.655 3.754 3.655zm2.187-2.909c-.795 0-1.342-.472-1.342-1.243 0-1.218.97-1.939 2.46-1.939.647 0 1.244.125 1.766.299l-.125.447c-.373 1.367-1.541 2.436-2.759 2.436zm20.781 2.933c4.325 0 7.408-2.436 7.408-6.015 0-2.61-1.84-3.828-4.524-4.847-2.387-.945-2.909-1.194-2.909-1.89s.721-1.243 1.89-1.243c1.764 0 3.28.771 4.598 1.914l2.983-3.33c-1.665-1.591-4.077-2.586-7.134-2.586-4.25 0-7.383 2.461-7.383 5.916 0 2.56 1.765 3.754 4.524 4.798 2.436.945 2.909 1.293 2.909 1.964 0 .795-.82 1.292-1.964 1.292-1.914 0-3.68-.795-5.37-2.361l-3.107 3.207c1.865 2.013 4.674 3.181 8.08 3.181zM64.755 7.498l2.485-1.516 1.69 1.516h2.81L69.65 3.422h-3.828l-4.275 4.076h3.207zm-.697 15.04c4.525 0 7.93-3.754 7.93-7.831 0-3.53-2.486-6.24-6.612-6.24-4.5 0-7.905 3.754-7.905 7.806 0 3.555 2.486 6.264 6.587 6.264zm.274-3.928c-1.392 0-2.337-.97-2.337-2.51 0-1.741 1.268-3.705 3.132-3.705 1.392 0 2.337.97 2.337 2.486 0 1.765-1.268 3.729-3.132 3.729zm14.144 3.927c2.685 0 4.375-1.044 5.742-2.635l-2.883-2.51c-.82.82-1.542 1.243-2.536 1.243-1.168 0-2.063-.87-2.063-2.238 0-2.038 1.442-4.002 3.231-4.002 1.219 0 1.865.647 2.312 1.69l3.704-1.913c-.72-2.064-2.585-3.68-5.717-3.68-4.475 0-8.079 3.63-8.079 8.154 0 3.63 2.66 5.891 6.289 5.891z"
                />
            </g>
        </svg>
    );
};

export const HomNay = ({ height, width, className }: IconsProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="113" height="28" viewBox="0 0 113 28">
            <defs>
                <linearGradient id="prefix__a" x1="0%" x2="98.078%" y1="47.804%" y2="52.196%">
                    <stop offset="0%" stopColor="#FF821D" />
                    <stop offset="100%" stopColor="#FF5B18" />
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path
                    fill="url(#prefix__a)"
                    d="M99.83 8.766l.547 8.079 4.524-8.079h4.971l-8.327 13.374c-1.939 3.032-3.704 4.126-6.339 4.126-1.566 0-2.66-.373-3.58-.97l2.114-3.455c.621.448 1.268.671 1.864.671.448 0 .77-.1 1.168-.497l-1.74-13.249h4.798zm-72.436-.298c4.127 0 6.613 2.71 6.613 6.239 0 4.077-3.406 7.83-7.93 7.83-4.102 0-6.587-2.71-6.587-6.264 0-4.052 3.405-7.805 7.904-7.805zm60.952.124c4.027 0 5.99 1.59 5.99 4.276 0 .517-.069 1.053-.192 1.605l-.081.333-1.989 7.408h-4.648l.373-1.442c-1.144 1.07-2.312 1.716-3.878 1.716-2.212 0-3.754-1.417-3.754-3.655 0-2.958 2.362-4.747 5.917-4.747 1.065 0 2.055.152 3.002.406l.403.116.05-.174c.05-.224.124-.498.124-.82 0-.87-.671-1.442-2.312-1.442-1.162 0-2.45.25-3.383.58l-.246.09-.671-3.43c1.417-.497 3.356-.82 5.295-.82zM10.392 4.814l-1.765 6.512h6.14l1.74-6.512h4.847l-4.673 17.4h-4.848l1.79-6.612h-6.14l-1.765 6.612H.871l4.673-17.4h4.848zm42.656 3.654c2.56 0 3.977 1.54 3.977 4.002 0 .72-.174 1.59-.398 2.436l-1.964 7.308h-4.698l1.865-7.035c.099-.348.174-.795.174-1.093 0-.895-.448-1.417-1.442-1.417-1.268 0-2.039.895-2.461 2.436l-1.914 7.11h-4.723l1.89-7.036c.098-.348.173-.795.173-1.093 0-.895-.472-1.417-1.442-1.417-1.267 0-2.038.895-2.46 2.436l-1.915 7.11h-4.723l3.605-13.449h4.723l-.398 1.491c.92-.944 2.163-1.79 3.754-1.79 1.839 0 3.007.945 3.504 2.337 1.268-1.441 2.909-2.336 4.873-2.336zm17.798-3.654l4.499 9.67 2.61-9.67h4.798l-4.674 17.4h-4.225l-4.699-10.018-2.684 10.018h-4.798l4.673-17.4h4.5zm16.381 11.583c-1.491 0-2.46.721-2.46 1.94 0 .77.546 1.242 1.341 1.242 1.166 0 2.285-.978 2.707-2.26l.053-.176.124-.447c-.522-.174-1.119-.299-1.765-.299zm-60.081-4.002c-1.865 0-3.132 1.964-3.132 3.704 0 1.541.944 2.51 2.336 2.51 1.865 0 3.132-1.963 3.132-3.728 0-1.516-.944-2.486-2.336-2.486zm4.524-8.973l2.088 4.076h-2.809l-1.69-1.516-2.486 1.516h-3.207l4.276-4.076h3.828z"
                    transform="translate(.889)"
                />
                <path d="M0 0H112V28H0z" transform="translate(.889)" />
            </g>
        </svg>
    );
};

export const DealFlashIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
            <g fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <g>
                        <g>
                            <g>
                                <g>
                                    <path
                                        fill="#FFB124"
                                        d="M10.735 5.617H6.207L7.613.357c.078-.291-.299-.485-.497-.256L.088 8.209c-.16.184-.027.468.219.468h4.528l-1.406 5.26c-.078.291.298.485.497.256l7.028-8.108c.16-.184.027-.468-.22-.468z"
                                        transform="translate(-918 -1074) translate(80 883) translate(782 184) translate(8 7) translate(48.169)"
                                    />
                                    <path
                                        fill="#FDD835"
                                        d="M6.207 5.617h-.555c-.191 0-.33-.179-.282-.361L6.584.714l.532-.613c.198-.23.575-.035.497.257L6.207 5.617zM10.954 6.085l-7.028 8.108c-.199.23-.576.035-.497-.257l.095-.356 6.496-7.495c.16-.184.027-.468-.218-.468h.933c.246 0 .378.284.219.468z"
                                        transform="translate(-918 -1074) translate(80 883) translate(782 184) translate(8 7) translate(48.169)"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export const Vector = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            width="1431"
            height="105"
            className={className}
            viewBox="0 0 1431 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 36.2274C308.531 219.886 521.943 -34.9837 778.073 28.7069C1105.98 110.245 1222.39 65.914 1430 1"
                stroke="#D1D5DB"
                strokeLinecap="round"
                strokeDasharray="6 14"
            />
        </svg>
    );
};

export const RocketIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            height={height}
            width={width}
            className={className}
            enableBackground="new 0 0 124 124"
            viewBox="0 0 124 124"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m82.899 50.646c-6.059 0-10.988-4.918-10.988-10.963s4.929-10.963 10.988-10.963 10.988 4.918 10.988 10.963-4.929 10.963-10.988 10.963zm0-17.979c-3.877 0-7.031 3.147-7.031 7.015s3.154 7.015 7.031 7.015 7.031-3.147 7.031-7.015-3.154-7.015-7.031-7.015z" />
            <path d="m122.558 2.183c-.069-.986-.853-1.773-1.841-1.848-14.728-1.125-41.975-.347-58.941 17.482-.002.002-.005.004-.007.007-2.3 2.441-4.418 5.209-6.382 8.136-24.65 8.882-35.589 25.07-38.168 33.298-.376 1.202.496 2.487 1.756 2.582l17.94 1.359c-1.478 3.901-2.824 7.823-4.017 11.748-.215.706-.02 1.472.504 1.992l11.995 11.891c.513.508 1.288.703 1.98.495 4-1.194 7.996-2.545 11.97-4.027l1.381 17.923c.097 1.253 1.377 2.122 2.581 1.752 7.562-2.328 24.216-13.247 33.545-37.919 2.953-1.954 5.73-4.064 8.153-6.359 17.668-16.682 18.58-43.82 17.551-58.512-.07-.987 1.029 14.692 0 0zm-3.878 2.008c.413 7.551.219 17.908-2.38 28.202l-26.124-25.897c10.42-2.625 20.888-2.767 28.504-2.305zm-96.722 53.877c3.21-7.053 12.265-18.732 29.892-26.418-2.945 5.084-5.502 10.331-7.777 15.002-2.04 4.172-3.917 8.403-5.638 12.665zm42.549 42.183-1.267-16.452c4.264-1.695 8.496-3.541 12.668-5.545 4.732-2.244 10.045-4.763 15.169-7.669-7.959 17.563-19.588 26.513-26.57 29.666zm37.752-42.448c-7.489 7.094-18.422 12.277-28.076 16.854-8.762 4.212-17.778 7.744-26.816 10.507l-10.293-10.205c2.785-8.95 6.346-17.879 10.592-26.562 4.394-9.022 9.862-20.251 17.01-27.839 5.992-6.295 13.426-10.299 21.11-12.794l29.252 28.998c-2.497 7.687-6.497 15.108-12.779 21.041z" />
            <path d="m4.185 122.808c-1.728 0-2.631-2.145-1.437-3.378l27.357-28.26c1.788-1.841 4.666.918 2.874 2.77l-27.357 28.259c-.392.405-.914.609-1.437.609z" />
            <path d="m23.435 124c-1.688 0-2.609-2.063-1.493-3.318l17.73-19.91c1.71-1.913 4.7.723 2.987 2.648l-17.73 19.91c-.394.444-.943.67-1.494.67z" />
            <path d="m2.982 104.917c-1.688 0-2.609-2.063-1.493-3.318l17.731-19.91c1.709-1.914 4.7.724 2.987 2.648l-17.731 19.91c-.395.444-.943.67-1.494.67z" />
        </svg>
    );
};

export const RefundIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            height={height}
            width={width}
            className={className}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m457.052 230.633a202.662 202.662 0 0 0 -197.686-177.273l13.9-13.787a10.666 10.666 0 1 0 -15.021-15.146l-33.787 33.513a10.663 10.663 0 0 0 -.062 15.083l33.786 34.065a10.666 10.666 0 1 0 15.146-15.021l-17.228-17.374a181.34 181.34 0 0 1 113.2 322.907 10.667 10.667 0 0 0 13.344 16.646c55.481-44.491 83.299-113.131 74.408-183.613z" />
            <path d="m253.818 404.911a10.666 10.666 0 1 0 -15.146 15.021l17.228 17.368a181.332 181.332 0 0 1 -113.233-322.87 10.668 10.668 0 0 0 -13.354-16.641c-55.454 44.495-83.256 113.122-74.365 183.576a202.645 202.645 0 0 0 197.692 177.267l-13.906 13.795a10.666 10.666 0 1 0 15.021 15.146l33.786-33.516a10.663 10.663 0 0 0 .063-15.083z" />
            <path d="m264.469 247.565c-1.516-.581-2.937-1.117-4.161-1.656-1.344-.594-2.953-1.211-4.729-1.885-10.1-3.836-15.578-6.867-15.578-11.885 0-2.216 2.365-5.656 6.88-7.943 3.2-1.617 14.75-6.047 29.469 4.771a10.666 10.666 0 1 0 12.635-17.187 57.463 57.463 0 0 0 -22.318-10.123v-9.657a10.667 10.667 0 0 0 -21.333 0v10.159a42.673 42.673 0 0 0 -8.083 3c-11.464 5.8-18.583 16.138-18.583 26.979 0 20.688 19.813 28.214 29.339 31.831 1.38.521 2.641.995 3.688 1.458 1.526.672 3.281 1.349 5.161 2.068 10.474 4 15.146 6.641 15.146 11.7 0 2.214-2.365 5.656-6.88 7.938-3.2 1.615-14.745 6.052-29.469-4.771a10.666 10.666 0 1 0 -12.635 17.188 57.62 57.62 0 0 0 22.318 10.194v10.256a10.667 10.667 0 0 0 21.333 0v-10.785a42.7 42.7 0 0 0 8.083-3.044c11.464-5.8 18.583-16.135 18.583-26.974-.002-20.603-18.778-27.778-28.866-31.632z" />
            <path d="m256 138.667a117.333 117.333 0 1 0 117.333 117.333 117.466 117.466 0 0 0 -117.333-117.333zm0 213.333a96 96 0 1 1 96-96 96.112 96.112 0 0 1 -96 96z" />
        </svg>
    );
};

export const CallCenterIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            height={height}
            width={width}
            className={className}
            enableBackground="new 0 0 64 64"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m59.506 27.903c-.245-6.981-3.072-13.509-8.036-18.473-5.203-5.204-12.118-8.069-19.47-8.069-14.849 0-26.982 11.819-27.505 26.542-2.266 1.007-3.852 3.275-3.852 5.911v7.262c0 3.566 2.901 6.468 6.468 6.468 2.308 0 4.185-1.877 4.185-4.185v-11.829c0-2.167-1.662-3.934-3.775-4.144.78-12.827 11.458-23.025 24.479-23.025 6.552 0 12.713 2.554 17.35 7.191 4.258 4.258 6.75 9.808 7.125 15.835-2.111.212-3.77 1.978-3.77 4.143v11.828c0 2.185 1.688 3.963 3.826 4.148v2.989c0 3.366-2.739 6.104-6.105 6.104h-4.521c-.222-.634-.57-1.22-1.058-1.706-.855-.859-1.995-1.332-3.209-1.332h-4.66c-.669 0-1.311.142-1.899.416-1.604.737-2.64 2.355-2.64 4.122 0 1.214.473 2.354 1.33 3.207.857.859 1.997 1.332 3.209 1.332h4.66c1.932 0 3.635-1.249 4.27-3.039h4.518c5.021 0 9.105-4.084 9.105-9.104v-3.523c2.252-1.013 3.826-3.273 3.826-5.898v-7.262c0-2.634-1.586-4.902-3.851-5.909zm-51.211 3.627v11.828c0 .653-.531 1.185-1.185 1.185-1.912 0-3.468-1.556-3.468-3.468v-7.262c0-1.913 1.556-3.468 3.468-3.468.654 0 1.185.532 1.185 1.185zm34.848 26.891c-.149.706-.783 1.219-1.506 1.219h-4.66c-.41 0-.795-.16-1.089-.454-.29-.289-.45-.675-.45-1.085 0-.599.351-1.146.901-1.399.196-.092.411-.139.638-.139h4.66c.41 0 .795.159 1.088.453.29.289.45.675.45 1.085.001.11-.011.22-.032.32zm17.214-17.346c0 1.912-1.556 3.468-3.468 3.468-.653 0-1.185-.531-1.185-1.185v-11.828c0-.653.531-1.185 1.185-1.185 1.912 0 3.468 1.556 3.468 3.468z" />
        </svg>
    );
};

export const CreditCardIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            height={height}
            width={width}
            className={className}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
        >
            <path d="m40.5 45h-30.5a5.006 5.006 0 0 1 -5-5v-24a5.006 5.006 0 0 1 5-5h38a5.006 5.006 0 0 1 5 5v17.06a1 1 0 0 1 -2 0v-17.06a3 3 0 0 0 -3-3h-38a3 3 0 0 0 -3 3v24a3 3 0 0 0 3 3h30.5a1 1 0 0 1 0 2z" />
            <path d="m52 28h-46a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h46a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-45-2h44v-4h-44z" />
            <path d="m40 34h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z" />
            <path d="m32 34h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z" />
            <path d="m24 40h-12a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-11-2h10v-4h-10z" />
            <path d="m49 53a1.025 1.025 0 0 1 -.234-.027 12.814 12.814 0 0 1 -9.766-12.298v-6.747a1 1 0 0 1 .975-1 26.6 26.6 0 0 0 8.625-1.844 1.007 1.007 0 0 1 .8 0 22.211 22.211 0 0 0 8.6 1.844 1 1 0 0 1 1 1v6.747a12.814 12.814 0 0 1 -9.766 12.3 1.025 1.025 0 0 1 -.234.025zm-8-18.128v5.8a10.8 10.8 0 0 0 8 10.294 10.8 10.8 0 0 0 8-10.294v-5.772a24.528 24.528 0 0 1 -8-1.813 27.972 27.972 0 0 1 -8 1.785z" />
            <path d="m48 45a1 1 0 0 1 -.555-.168l-3-2a1 1 0 0 1 1.11-1.664l2.318 1.545 4.92-4.92a1 1 0 0 1 1.414 1.414l-5.5 5.5a1 1 0 0 1 -.707.293z" />
        </svg>
    );
};

export const FourSquaresIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            height={height}
            width={width}
            className={className}
            viewBox="-19 -19 600 600"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m251.25 12.5c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 213.75h-201.25v-201.25h201.25zm0 0" />
            <path d="m562.5 12.5c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 213.75h-201.25v-201.25h201.25zm0 0" />
            <path d="m251.25 323.75c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 212.5h-201.25v-200h201.25zm0 0" />
            <path d="m562.5 323.75c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 212.5h-201.25v-200h201.25zm0 0" />
        </svg>
    );
};
