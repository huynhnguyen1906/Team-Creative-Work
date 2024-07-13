import Style from '@styles/componentsStyles/ModalNavBar.module.scss';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';

interface ModalNavBarProps {
    handleClose: () => void;
}

export default function ModalNavBar({ handleClose: handleClose }: ModalNavBarProps) {
    return (
        <div
            className={Style.NavDisplay}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    handleClose();
                }
            }}
        >
            <nav className={Style.NavBar}>
                <IoCloseOutline color="#4B3333" className={Style.CloseIcon} size={40} onClick={handleClose} />
                <ul className={Style.NavItemBox}>
                    <li className={Style.NavItem}>
                        <Link href={'/'}>歴てくについて</Link>
                    </li>
                    <li className={Style.NavItem}>
                        <Link href={'/tours'}>ツアー紹介</Link>
                    </li>
                    <li className={Style.NavItem}>
                        <Link href={'/news'}>お知らせ</Link>
                    </li>
                    <li className={Style.NavItem}>
                        <Link href={'#'}>よくある質問</Link>
                    </li>
                    <li className={Style.NavItem}>
                        <Link href={'#'}>お問い合わせ</Link>
                    </li>
                    <li className={Style.NavItem}>
                        <Link href="#">
                            <FaXTwitter color="#4B3333" />
                        </Link>
                        <Link href="#">
                            <FaInstagram color="#4B3333" />
                        </Link>
                        <Link href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.7795 6.90333C15.7795 3.45374 12.3732 0.647324 8.18613 0.647324C3.9991 0.647324 0.592773 3.45398 0.592773 6.90333C0.592773 9.99569 3.29411 12.5855 6.94319 13.075C7.19045 13.1292 7.52693 13.2408 7.61236 13.4552C7.68876 13.6503 7.66219 13.9553 7.6368 14.1523L7.52835 14.8124L7.52546 14.8292C7.4893 15.0378 7.39793 15.5651 8.18613 15.2279C8.99648 14.8813 12.559 12.6137 14.1524 10.7521H14.1521C15.2527 9.52739 15.7795 8.2839 15.7795 6.90333ZM6.64328 5.2374H6.11056C6.02893 5.2374 5.96273 5.30485 5.96273 5.38748V8.74626C5.96273 8.76594 5.96656 8.78542 5.97399 8.80359C5.98143 8.82175 5.99233 8.83825 6.00607 8.85213C6.01981 8.86601 6.03611 8.87699 6.05404 8.88445C6.07197 8.89192 6.09118 8.89571 6.11056 8.89562H6.64328C6.66266 8.89571 6.68187 8.89192 6.6998 8.88445C6.71773 8.87699 6.73404 8.86601 6.74777 8.85213C6.76151 8.83825 6.77241 8.82175 6.77985 8.80359C6.78729 8.78542 6.79112 8.76594 6.79112 8.74626V5.38965C6.79112 5.30702 6.72467 5.23957 6.64328 5.23957V5.2374ZM10.3094 5.23716H9.77696C9.6951 5.23716 9.62889 5.30461 9.62889 5.38724V7.3828L8.11022 5.30389C8.1069 5.29859 8.10311 5.29353 8.09883 5.28871L8.09788 5.28775C8.09508 5.2845 8.09207 5.28144 8.08887 5.2786L8.07843 5.26896L8.07463 5.26607L8.06704 5.26077L8.06229 5.25788L8.05446 5.25306C8.05304 5.25258 8.05114 5.25162 8.04971 5.25065L8.0485 5.25003C8.04611 5.2488 8.04381 5.24762 8.04117 5.2468L8.03855 5.24586C8.0377 5.24552 8.03727 5.24535 8.03643 5.24535C8.03457 5.24441 8.0326 5.24388 8.03067 5.24335L8.02765 5.24246L8.02243 5.24102C8.01958 5.24053 8.01697 5.23957 8.01412 5.23909L8.00795 5.23813C8.00605 5.23764 8.00273 5.23716 8.00012 5.23716L7.99253 5.23668L7.98731 5.23644H7.45482C7.37319 5.23644 7.30699 5.30389 7.30699 5.38652V8.7453C7.30699 8.76497 7.31082 8.78445 7.31826 8.80262C7.32569 8.82079 7.33659 8.83729 7.35033 8.85116C7.36407 8.86504 7.38037 8.87603 7.3983 8.88349C7.41623 8.89095 7.43544 8.89475 7.45482 8.89465H7.98731C8.06893 8.89465 8.13538 8.82768 8.13538 8.7453V6.7507L9.65334 8.83202C9.66359 8.84653 9.67628 8.85909 9.69083 8.86912C9.69448 8.872 9.69744 8.87383 9.70015 8.8755L9.70151 8.87634C9.70229 8.87687 9.70307 8.87741 9.70386 8.87786C9.7045 8.87822 9.70514 8.87854 9.70578 8.87875L9.70848 8.88001L9.7129 8.88213L9.71292 8.88213C9.71528 8.8831 9.71765 8.88406 9.72001 8.8855L9.73425 8.8908C9.74724 8.89441 9.76065 8.89619 9.77412 8.8961H10.3066C10.326 8.89619 10.3452 8.8924 10.3631 8.88494C10.3811 8.87747 10.3974 8.86649 10.4111 8.85261C10.4248 8.83873 10.4357 8.82223 10.4432 8.80407C10.4506 8.7859 10.4544 8.76642 10.4544 8.74674V5.38965C10.4544 5.30702 10.388 5.23957 10.3066 5.23957L10.3094 5.23716ZM3.91189 8.05484H5.35937L5.3589 8.05725C5.44076 8.05725 5.50673 8.12446 5.50673 8.20732V8.74813C5.50673 8.83076 5.44053 8.89821 5.3589 8.89821H3.23086C3.19147 8.89821 3.15564 8.88207 3.12883 8.85629C3.12854 8.85601 3.12826 8.85555 3.12747 8.85461C3.12694 8.85398 3.12618 8.85312 3.12503 8.85196C3.09852 8.82409 3.08372 8.78687 3.08374 8.74813V5.38959C3.08374 5.30696 3.14994 5.23951 3.23157 5.23951H3.76406C3.84545 5.23951 3.91189 5.30672 3.91189 5.38959V8.05484ZM13.3986 5.92847C13.3986 6.0111 13.3324 6.07855 13.2508 6.07855H13.2503H11.8033V6.64609H13.2503C13.3322 6.64609 13.3981 6.71354 13.3981 6.79641V7.33914C13.3982 7.35888 13.3945 7.37844 13.3871 7.39669C13.3797 7.41494 13.3688 7.43152 13.355 7.44548C13.3413 7.45943 13.325 7.47048 13.307 7.47799C13.289 7.4855 13.2697 7.48932 13.2503 7.48922H11.8033V8.05701H13.2503C13.3322 8.05701 13.3981 8.12422 13.3981 8.20708V8.74813C13.3981 8.83076 13.3319 8.89821 13.2503 8.89821H11.1223C11.0841 8.89823 11.0474 8.8832 11.02 8.85629L11.0162 8.85244C10.9897 8.82457 10.9749 8.78735 10.9749 8.74861V5.38983C10.9749 5.34936 10.9906 5.31034 11.0159 5.28625C11.0163 5.28546 11.017 5.28468 11.0188 5.28313C11.0192 5.28276 11.0197 5.28236 11.0202 5.28191C11.0468 5.25565 11.0829 5.23951 11.1227 5.23951H13.2508C13.3326 5.23951 13.3986 5.30672 13.3986 5.38959V5.92847Z"
                                    fill="#4B3333"
                                />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}