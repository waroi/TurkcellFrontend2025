'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./MenuItems.scss";

interface MenuItem {
    id: string;
    label: string;
    href: string;
    subMenu?: MenuItem[];
    icon?: string;
}

const MenuItems = ({ menuItemsLeft, menuItemsRight }: { menuItemsLeft: MenuItem[], menuItemsRight: MenuItem[] }) => {
    const pathname = usePathname();

    const isActive = (itemHref: string) => {
        const basePath = pathname?.replace(/^\/(tr|en)/, "");
        const normalizedPath = basePath === "" ? "/" : basePath;
        return normalizedPath === itemHref;
    };

    const renderMenu = (items: MenuItem[], ulClass: string) => (
        <ul className={ulClass}>
            {items.map((item) => (
                <li key={item.id} className={`nav-item ${isActive(item.href) ? "active" : ""}${item.subMenu ? "dropdown" : ""}`}>
                    {item.subMenu ? (
                        <>
                            <button
                                className="nav-link dropdown-toggle"
                                id={`navbarDropdown-${item.id}`}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {item.label}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby={`navbarDropdown-${item.id}`}>
                                {item.subMenu.map((subItem) => (
                                    <li key={subItem.id} className={isActive(subItem.href) ? "active" : ""}>
                                        <Link
                                            className={`dropdown-item`}
                                            href={subItem.href}
                                        >
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <Link
                            className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                            href={item.href}
                            aria-current={item.href === "/" ? "page" : undefined}
                        >
                            {item.label}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {renderMenu(menuItemsLeft, "navbar-nav me-auto")}
            {renderMenu(menuItemsRight, "navbar-nav ms-auto")}
        </>
    );
};

export default MenuItems;