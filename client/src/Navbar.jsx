import './Navbar.css';
import menu from './assets/menu.png';

export default function Navbar(){
    return(
        <>
            <nav>
                <div className='nav-content'>
                    <h3>Books recommendation and searching</h3>
                    <div>
                        <img src={menu} width="60px" height="60px"></img>
                    </div>
                </div>
            </nav>
        </>
    )
}