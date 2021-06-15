import React from 'react'

const DetailItem = ({ detailItemData }) => {
    return (
        <div>
            <div>
                id: <b>{detailItemData.id} </b>
        </div>
            <div>
                firstName: <b>{detailItemData.firstName}</b>
        </div>
            <div>
                lastName: <b>{detailItemData.lastName}</b>
        </div>
            <div>
                email: <b>{detailItemData.email}</b>
        </div>
            <div>
                phone: <b>{detailItemData.phone}</b>
        </div>
            <div>
                address: <b>{detailItemData.address}</b>
        </div>
        <div>
        streetAddress: <b>{detailItemData.streetAddress}</b>
        </div>
        <div>
        city: <b>{detailItemData.city}</b>
        </div>
        <div>
        state: <b>{detailItemData.state}</b>
        </div>
        <div>
        zip: <b>{detailItemData.zip}</b>
        </div>
        </div>
    )
}

export default DetailItem