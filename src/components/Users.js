import React from 'react'

function Users() {
    const x = localStorage.getItem('formData');
    const y = JSON.parse(x);
    console.log(y);
    return (
            <div id="results">
                <div className="row">
                    <div>NAME</div>
                    <div>WEIGHT</div>
                    <div>HEIGHT</div>
                    <div>BMI</div>
                </div>
                {
                    y.map((item, index) => (
                        <div key={index} className="row">
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
