
import { Link } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';

function Header() {

    const [user, setUser] = useState([])


    useEffect(() => {
        const savedItem = localStorage.getItem ("user");
        const parsedItem = JSON.parse(savedItem);
        setUser(parsedItem)
    },[]);

    console.log(user);
  return (
    <div className="App">
      <header>
    <section class="header-content">
        <h1 class="brand-logo">
            <Link href="#" class="logo">
                <i class="fa-solid fa-globe"></i>
                <span class="logo-text">LOGO</span>
            </Link>
        </h1>
        <nav role="navigation">
            <ul class="navigation__list-container" data-visible="true">
                <li class="nav__item">
                    <a class="nav__link" href="/">Home</a>
                </li>
               
                <li class="nav__item">
                    <a class="nav__link" href="/login">Login</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="/signup">Sign Up</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
        <div className='setdata'>
               <h3>{user?.fname}</h3> 
           
        <img className='imges' src="https://media.istockphoto.com/id/1188685158/photo/funny-child-with-big-glasses-laughing.jpg?s=1024x1024&w=is&k=20&c=ww-Xy97wHmK3qUWm28IQUuz9YWeXwXHj7jHA3MlVKr0=" alt=""  />
        </div>
    </section>
</header>
    </div>
  );
}

export default Header;
