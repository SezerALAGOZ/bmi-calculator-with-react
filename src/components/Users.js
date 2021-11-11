import React from 'react'

function Users() {
    const formData = localStorage.getItem('formData');
    const newFormData = JSON.parse(formData);
    return (
            <div id="results">
                <div className="row resultRow">
                    <div>NAME</div>
                    <div>WEIGHT</div>
                    <div>HEIGHT</div>
                    <div>BMI</div>
                </div>
                {
                    newFormData.map((item, index) => (
                        <div key={index} className="resultRow">
                            <div>{item.username}</div>
                            <div>{item.weight}</div>
                            <div>{item.height}</div>
                            <div>{item.bmi}</div>
                        </div>
                    ))
                }
            </div>
    )
}

export default Users;
