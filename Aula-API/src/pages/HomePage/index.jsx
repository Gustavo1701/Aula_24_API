import Produtos from "../../components/Produtos";

function HomePage() {
    return (
        <>
            <h2>Home Page</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Produtos titulo="Mouse USB Apple" valor={15.99}>
                            Mouse USB - Apple
                        </Produtos>
                    </div>
                    <div className="col">
                        <Produtos titulo="Teclado USB Apple" valor={95.99}>
                            Teclado USB - Apple
                        </Produtos>
                    </div>
                    <div className="col">
                        <Produtos titulo="Monitor Apple" valor={5500.00}>
                            Monitor - Apple
                        </Produtos>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default HomePage;