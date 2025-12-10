import React, { useEffect, useState } from 'react';
import { list } from '../../datasource/api-inventory';
import ListItemInventory from './ListItemInventory';
import { Link } from 'react-router-dom';

const ListInventory = () => {
    const [inventoryList, setInventoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadInventory = () => {
        list()
            .then((data) => {
                setInventoryList(data || []);
                setIsLoading(false);
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            });
    };

    useEffect(() => {
        loadInventory();
    }, []);

    const handleRemove = () => {
        loadInventory();
    };

    return (
        <>
            <div>
                <Link to="/inventory/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new Item
                </Link>
            </div>

            <div className="table-responsive">
                {isLoading && <div>Loading...</div>}

                {/* ⭐ Show table ONLY when there are items */}
                {!isLoading && inventoryList.length > 0 && (
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">Item</th>
                                <th className="text-center">Qty</th>
                                <th className="text-center">Status</th>
                                <th>Size</th>
                                <th className="text-center">Tags</th>
                                <th className="text-center" colSpan="3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryList.map((product) => (
                                <ListItemInventory
                                    key={product.id}
                                    product={product}
                                    onRemoved={handleRemove}
                                />
                            ))}
                        </tbody>
                    </table>
                )}

                {/* ⭐ When list is empty: show NOTHING (no header, no table) */}
                {!isLoading && inventoryList.length === 0 && (
                    <div style={{ paddingTop: "20px" }}></div>
                )}
            </div>
        </>
    );
};

export default ListInventory;
