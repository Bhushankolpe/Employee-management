import React from 'react'

const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn mt-2">
                    <button className='btn btn-primary'>Add Data</button>
                </div>
                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Meet</td>
                            <td>meet@gmail.com</td>
                            <td>Web Devloper</td>
                            <td>7733865376</td>
                            <td className="d-flex justify-content-between ">
                                <button>read</button>
                                <button>update</button>
                                <button>delete</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Home