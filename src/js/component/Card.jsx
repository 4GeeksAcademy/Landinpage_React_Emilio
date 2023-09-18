import React from "react"

const Card = () => {
    return (
        <div className="container">
            <div className="card-group">
                <div className="card">
                    <img src="https://picsum.photos/id/59/500/325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center justify-content-cente">Card title</h5>
                        <p className="card-text">This is a wider card with text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <div className="container-fluid">
                            <div className="text-center">
                                <a className="btn btn-primary btn-sm" href="#" role="button">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/id/11/500/325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center justify-content-cente">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <div className="container-fluid">
                            <div className="text-center">
                                <a className="btn btn-primary btn-sm" href="#" role="button">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/id/48/500/325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center justify-content-cente">Card title</h5>
                        <p className="card-text">This is a wider card with text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <div className="container-fluid">
                            <div className="text-center">
                                <a className="btn btn-primary btn-sm" href="#" role="button">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="https://picsum.photos/id/64/500/325" className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title text-center justify-content-center">Card title</h5>
                        <p className="card-text">This is a wider card with text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <div className="container-fluid">
                            <div className="text-center">
                                <a className="btn btn-primary btn-sm" href="#" role="button">Find Out More!</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Card