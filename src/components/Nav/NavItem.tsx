
export interface Item {
    label: string;
    icon: JSX.Element;
    active?: boolean;
}

const NavItem = ({ item }: { item: Item }) => {

    const { label, icon, active } = item

    return (
        <li className={`
            flex p-2 justify-end 
            items-center cursor-pointer 
            hover:bg-cyan-300
            ${active ? 'bg-primary text-white' : ''}
        `}
        >
            <h3 className="mr-2">{label}</h3>
            {icon}
        </li>
    );
}

export default NavItem;