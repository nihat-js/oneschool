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

		<section className="programs">
			<div className="container">
				<h2 className="heading"> Our Programs </h2>
				<p className="subheading"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!
				</p>
				<div className="row">
					<div className="left-column">
						<img src="" alt="" />
					</div>
					<div className="right-column">
						<h3 className="title"> We Are Excellent In Education  </h3>
						<p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
						<div>
							<img src="" alt="" />
							<p className="text"> 22,931 Yearly Graduates </p>
						</div>
						<div>
							<img src="" alt="" />
							<p className="text">150 Universities Worldwide </p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="teachers">
			<div className="container">
				<h2 className="heading"> Our Teachers </h2>
				<p className="subheading"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
				<div className="row">
					<SectionTeacherBox />
					<SectionTeacherBox />
					<SectionTeacherBox />
				</div>
			</div>
		</section>

		<section className="jerome">
			<div className="container">
				<div className="row">
					<div className="img-wrap">
						<img src="" alt="" />
					</div>
					<p className="full-name">Jerome jenson </p>
					<p className="description">“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda ”</p>
				</div>
			</div>
		</section>


		<section className="why">
			<div className="container">
				<h3 className="heading">  Why choose us   </h3>
				<div className="row">
					<div className="left-column">
						<div>
							<p className="text"> 22,931 Yearly Graduates </p>
							<img src="" alt="" />
						</div>
						<div>
							<p className="text"> 150 Universities Worldwide  </p>
							<img src="" alt="" />
						</div>
						<div>
							<p className="text"> Top Professionals in The World </p>
							<img src="" alt="" />
						</div>
						<div>
							<p className="text"> Expand Your Knowledge </p>
							<img src="" alt="" />
						</div>
						<div>
							<p className="text"> Best Online Teaching Assistant Courses </p>
							<img src="" alt="" />
						</div>
						<div>
							<p className="text"> Best Teachers </p>
							<img src="" alt="" />
						</div>
					</div>
					<div className="right-column">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</section>

		<section className="message">
			<div className="container">
				<h3 className="heading"> Message Us  </h3>
				<p className="subheading"> Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nis</p>
				<form action="">
					<div className="first-last">
						<input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
					</div>
					<div className="subject">
						<input type="text" />
					</div>
					<div className="email">
						<input type="text" />
					</div>
					<div className="message">
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
					<div className="action">
						<button> Send Messsage </button>
					</div>
				</form>
			</div>
		</section>


	</div>
	);
}



function SectionTeacherBox() {
	return (
		<div className="box">
			<div className="img-wrap">
				<img src="" alt="" />
			</div>
			<p className="full-name">Benjamin Stone</p>
			<p className="position"> Physics Teacher</p>
			<p className="bio"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
		</div>
	)

}



export default Index;
