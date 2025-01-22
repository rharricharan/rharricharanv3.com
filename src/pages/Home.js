import './home.css';
import React from 'react';
import '../components/DesktopHeader';
import DesktopHeader from '../components/DesktopHeader';

function Home() {
    return (
        <div className='home-container'>
            <DesktopHeader />
            <div className='home-wrap'>
                <div className='home-hero'>
                    <div className="home-hero-wrap">
                        <h1>An award winning multidisplinary designer crafting interfaces that are useful and feel natural.</h1>
                        <h3>Previously designed at Smartstop® and has worked for BMW, Verizon and Our Next Energy®.</h3>
                    </div>
                    <div className='home-video-stack'>
                        <div className='home-video-container'>
                            
                        </div>
                        <a className='experience-link'>
                            <div className='left-experience-box'>
                                <svg width="231" height="104" viewBox="0 0 231 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="20" width="64" height="64" rx="16" fill="#FD0202"/>
                                    <path d="M27.8721 68H35.5637C35.5637 66.5687 35.1367 64.4801 36.8251 63.742C37.5996 63.4033 38.4843 63.3906 39.332 63.2827C42.6757 62.8566 45.7168 60.7534 47.1176 57.8976C48.5185 55.0419 48.2338 51.5269 46.3884 48.8987C44.543 46.2706 41.1973 44.6149 37.8229 44.6602C34.4484 44.7056 31.1554 46.4497 29.3919 49.1259C28.9196 49.8427 28.5467 50.6243 27.9501 51.2558C27.3535 51.8873 26.4517 52.3584 25.5666 52.1893C24.8593 52.0542 24.2929 51.5301 23.978 50.9262C23.5647 50.1346 23.5588 49.1077 24.173 48.4381C24.9485 47.5917 26.3182 47.5989 27.5055 47.4706C29.8413 47.2186 32.0654 46.1536 33.6427 44.5319C35.8966 42.2152 36.4956 39.0317 36.1335 36H28.4497C28.4224 37.4018 28.8357 39.5471 27.198 40.273C26.4293 40.6139 25.5466 40.6189 24.7019 40.7191C21.3415 41.1176 18.2751 43.2244 16.8728 46.0924C15.4705 48.9604 15.7776 52.4921 17.6527 55.1162C19.5273 57.7403 22.9057 59.3711 26.2923 59.2922C29.679 59.2133 32.9623 57.4288 34.7048 54.7268C35.0982 54.1165 35.4189 53.4628 35.8849 52.8983C36.3509 52.3344 37.0006 51.8533 37.76 51.7695C38.4863 51.6892 39.2267 51.9952 39.7287 52.4903C40.416 53.1676 40.6582 54.2612 40.1542 55.0659C39.7823 55.6603 39.0819 56.018 38.3683 56.1993C37.6547 56.3807 36.9095 56.4124 36.1793 56.5207C33.905 56.8581 31.772 57.9683 30.2736 59.595C28.0066 62.0555 27.9179 64.9416 27.8716 68H27.8721Z" fill="white"/>
                                    <g filter="url(#filter0_d_71_117)">
                                        <rect x="49" y="20" width="64" height="64" rx="16" fill="#FF4E12" shape-rendering="crispEdges"/>
                                        <g clip-path="url(#clip0_71_117)">
                                            <path d="M85.08 42L81.7164 55.5687L78.5412 42H74.208L71.0316 55.5687L67.6704 42H63L69.0144 61.765H73.1244L76.374 48.98L79.6248 61.765H83.7348L89.748 42H85.0776H85.08ZM92.724 58.7062C92.724 60.5887 94.068 62 95.862 62C97.6548 62 99 60.5875 99 58.7062C99 56.8237 97.656 55.4113 95.862 55.4113C94.068 55.4113 92.724 56.8237 92.724 58.7062Z" fill="white"/>
                                        </g>
                                    </g>
                                    <g filter="url(#filter1_d_71_117)">
                                        <rect x="98" y="20" width="64" height="64" rx="16" fill="#1DB42C" shape-rendering="crispEdges"/>
                                        <path d="M141.981 42.0868C143.855 43.1754 144.652 45.4348 143.889 47.4546C143.827 47.6463 143.718 47.8722 143.582 48.105C143.514 48.2214 143.432 48.3515 143.351 48.461C142.424 49.7961 140.823 50.5082 139.189 50.2754C138.671 50.2138 138.153 50.3233 137.745 50.6451C136.552 51.6105 134.155 53.6303 133.351 54.8832C133.276 54.9996 133.208 55.116 133.14 55.2324C132.316 56.6702 132.145 57.93 132.663 58.7585C133.453 60.0182 135.878 60.2168 137.125 59.7033C137.963 59.3541 138.187 58.5257 138.868 57.9779C139.761 57.259 140.926 56.9098 142.07 57.0331C142.451 57.0742 142.826 57.1632 143.207 57.3138C143.385 57.3754 143.596 57.4781 143.807 57.6014C146.47 59.1487 146.913 63.0924 143.991 65.1738C142.656 66.1118 140.898 66.1186 139.522 65.3175C139.338 65.2148 139.161 65.0916 138.998 64.9547C138.698 64.7356 138.433 64.4754 138.194 64.181C137.642 63.5032 136.777 63.1608 135.905 63.2225H135.878C134.672 63.2499 133.283 63.5374 131.852 64.0509C131.396 64.2221 130.926 64.407 130.47 64.6124C129.714 64.9547 128.951 65.3107 128.256 65.7832C127.65 66.2008 127.282 66.7759 126.73 67.2141C125.599 68.1042 123.76 68.1932 122.459 67.7071C120.027 66.7965 118.992 64.3385 119.735 61.9627C120.055 60.9494 119.939 59.8128 119.844 58.7585C119.796 58.2244 119.707 57.7041 119.592 57.2043C119.401 56.3279 119.217 55.3556 118.726 54.5888C118.045 53.5207 116.887 53.9521 115.866 53.3633C115.791 53.3153 115.702 53.2674 115.627 53.2195C115.355 53.0346 115.123 52.8224 114.926 52.5827C113.652 51.1449 113.665 48.8787 115.137 47.4204C116.295 46.2633 118.141 46.051 119.571 46.8521C119.68 46.9137 119.775 46.9753 119.871 47.0506C120.286 47.3382 120.634 47.7079 120.899 48.1324C121.329 48.8171 121.519 49.6387 121.458 50.4808L121.39 51.0354C121.39 51.0354 121.356 51.0491 121.356 51.0559C121.22 51.5968 121.254 52.1583 121.458 52.6718C121.819 53.555 122.207 54.2465 122.595 54.6915C122.963 55.1434 123.352 55.3625 123.699 55.3283C124.019 55.294 124.326 55.027 124.612 54.534C124.687 54.4108 124.755 54.267 124.823 54.1164C125.014 53.6782 125.17 53.151 125.313 52.528C125.708 50.6657 125.783 48.2283 125.531 45.6676C125.49 45.2637 125.443 44.8666 125.388 44.4626C125.32 43.9422 125.068 43.4698 124.7 43.0933C124.619 43.0043 124.544 42.9084 124.462 42.8057C123.808 41.9567 123.495 40.8476 123.617 39.7589C123.665 39.2865 123.794 38.8483 123.985 38.4512C124.026 38.3485 124.087 38.2253 124.155 38.1089C125.313 36.0959 127.888 35.3976 129.904 36.5684C130.763 37.0682 131.417 37.8624 131.75 38.8004C131.88 39.1427 131.968 39.533 131.989 39.937C132.05 40.7722 131.866 41.6075 131.444 42.3401C131.103 42.9358 130.626 43.4356 130.047 43.7984C129.523 44.1476 129.141 44.6748 128.958 45.2774C128.365 47.215 128.052 49.0841 128.079 50.652C128.106 52.4527 128.583 53.6645 129.373 53.9658C130.17 54.2602 131.314 53.6645 132.513 52.3157C133.133 51.6174 133.732 50.7615 134.298 49.7824C134.638 49.1868 134.965 48.55 135.265 47.8654C135.449 47.4477 135.49 46.9822 135.435 46.5235C135.408 46.2838 135.388 46.0373 135.401 45.7977C135.408 45.0857 135.613 44.353 135.98 43.7094C136.021 43.641 136.055 43.5725 136.11 43.5109C136.348 43.1138 136.716 42.7098 137.159 42.3812C138.562 41.3336 140.456 41.2173 141.968 42.1005L141.981 42.0868Z" fill="white"/>
                                    </g>
                                    <g filter="url(#filter2_d_71_117)">
                                        <rect x="147" y="20" width="64" height="64" rx="16" fill="#0898FB" shape-rendering="crispEdges"/>
                                        <path d="M192.667 52C192.667 59.5479 186.548 65.6667 179 65.6667C171.452 65.6667 165.333 59.5479 165.333 52C165.333 44.4521 171.452 38.3333 179 38.3333C186.548 38.3333 192.667 44.4521 192.667 52Z" stroke="white" stroke-width="4.66668"/>
                                        <path d="M173.182 52H184.818M179 57.8182V46.1818" stroke="white" stroke-width="2.66668"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_71_117" x="29" y="0" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset/>
                                            <feGaussianBlur stdDeviation="10"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_71_117"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_71_117" result="shape"/>
                                        </filter>
                                        <filter id="filter1_d_71_117" x="78" y="0" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset/>
                                            <feGaussianBlur stdDeviation="10"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_71_117"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_71_117" result="shape"/>
                                        </filter>
                                        <filter id="filter2_d_71_117" x="127" y="0" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset/>
                                            <feGaussianBlur stdDeviation="10"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_71_117"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_71_117" result="shape"/>
                                        </filter>
                                        <clipPath id="clip0_71_117">
                                            <rect width="36" height="20" fill="white" transform="translate(63 42)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h2>View experience</h2>
                            </div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35147 23.6485C8.8201 24.1172 9.5799 24.1172 10.0485 23.6485L21.6 12.0971V21.2C21.6 21.8627 22.1373 22.4 22.8 22.4C23.4627 22.4 24 21.8627 24 21.2V9.2C24 8.53726 23.4627 8 22.8 8H10.8C10.1373 8 9.6 8.53726 9.6 9.2C9.6 9.86274 10.1373 10.4 10.8 10.4H19.9029L8.35147 21.9515C7.88284 22.4201 7.88284 23.1799 8.35147 23.6485Z" fill="black" fill-opacity="0.5"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='spacer'></div>
            </div>
        </div>
    );
}

export default Home;