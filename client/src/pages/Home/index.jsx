import React from 'react';

const Index = () => {
  return (<div className="home-page">
    <nav>
      <div className="container-nav">
        <h3 className="brand"> OneSchool  </h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="actions">
          <button> Contact us </button>
        </div>
      </div>
    </nav>

    <section className='hero'>
      <div className="container">
        <div className="row">
          <h3 className="heading"> Learn From The Expert </h3>
          <p className="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus. </p>
          <button className='btn-orange'> Admission now </button>
        </div>
      </div>
    </section>

    <section className="courses">
      <header>
        <h2 className="heading"> Courses  </h2>
      </header>
      <div className="container">
        <div className="row">
          <div className="box">
            <div className='img-wrap'>
              <img src="" alt="" />
              <div className="price"> 15% </div>
            </div>
            <p className="schedule "> 4 lesssons  / 12 Week   </p>
            <h3 className="title"> JS Programming </h3>
            <p className="description"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo. </p>
            <div className="info">
              <div className="students">
                <img src="" alt="" />
                <p className='text'> 2193 students </p>
              </div>
              <div className="comments">
                <img src="" alt="" />
                <p className="text"> 2 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className='btn-purple'> Prev </button>
          <button className='btn-purple'> Next </button>
        </div>
      </div>
    </section>

    <section className="programs"></section>

  </div>
  );
}

export default Index;
