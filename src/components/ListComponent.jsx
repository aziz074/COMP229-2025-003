import RowComponent from "./rowComponent";

function ListComponent({ items }) {
    return (
        <div className="services-list">
            {items.map((itemList, index) => (
                <RowComponent key={index} item={itemList}/>
            ))}
        </div>
    );
}

export default ListComponent;
