// 'use client'
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useState } from 'react';

// const NavItems = ({ item, onePage }) => {
//     const pathname = usePathname();
//     const { name, href, subNavItems } = item;
//     const subHref = subNavItems?.map((item) => item.href);
//     const current = pathname === href || subHref?.includes(pathname);




//     return (
//         <li className={`${subNavItems && "dropdown"} ${current ? " current" : ""}`}>
//             <Link href={href}>{name}</Link>

//             {
//                 subNavItems && <ul className="sub-menu">
//                     {subNavItems.map((subItem) => (
//                         <li

//                             key={subItem.id}

//                         >
//                             <Link href={subItem.href}>{subItem.name}</Link>
//                             {
//                                 subItem?.subItems &&
//                                 <ul className="">
//                                     {subItem?.subItems?.map((item) => (
//                                         <li key={item.id}>
//                                             <Link href={item.href}>{item.name}</Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             }

//                         </li>
//                     ))}

//                 </ul>
//             }


//         </li>
//     );
// };

// export default NavItems;


'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const NavItems = ({ item }) => {
    const pathname = usePathname();
    const { name, href, subNavItems } = item;
    const subHref = subNavItems?.map((item) => item.href);
    const current = pathname === href || subHref?.includes(pathname);

    // State to control dropdown visibility
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault(); // Prevent navigation on click
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <li className={`${subNavItems && "dropdown"} ${current ? " current" : ""}`}>
            <Link href={href} onClick={subNavItems ? toggleDropdown : null}>
                {name}
            </Link>

            {subNavItems && dropdownOpen && (
                <ul className="sub-menu">
                    {subNavItems.map((subItem) => (
                        <li key={subItem.id}>
                            <Link href={subItem.href}>{subItem.name}</Link>
                            {subItem.subItems && (
                                <ul className="sub-sub-menu">
                                    {subItem.subItems.map((item) => (
                                        <li key={item.id}>
                                            <Link href={item.href}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default NavItems;
