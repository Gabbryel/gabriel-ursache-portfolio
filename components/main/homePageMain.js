import { Fragment, useRef } from "react";
import Image from 'next/image';
import classes from "./homePageMain.module.scss";
function HomePageMain() {
  const heroRef = useRef();
  const showName = (name) => name.split('').map((el, i) => <span key={i}>{el}</span>);
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.text}>
          <code>
            <p className={classes.html}>&lt;html&gt;</p>
              <p className={classes.head}>&lt;head&gt;</p>
                <p className={classes.title}>&lt;title&gt;Amazing portfolio&lt;/title&gt;</p>
              <p className={classes.head}>&lt;/head&gt;</p>
              <p className={classes.body}>&lt;body&gt;</p>
                <p className={classes.h1}>&lt;h1&gt;</p>
                <div className={classes.hero_section} ref={heroRef} >
                  <p className={classes.hero_section__text}>{showName('Hi,')}</p>
                  <p className={classes.hero_section__text}><Image src='/logo-v4.png' height={50} width={50} alt="logo"/>{showName('abriel here,')}</p>
                  <p className={classes.hero_section__text}>{showName('Web Developer!')}</p>
                </div>
                <p className={classes.h1}>&lt;/h1&gt;</p>
                <p className={classes.ul}>&lt;ul&gt;</p>
                  <p className={classes.li}>&lt;li&gt;Full stack web developer&lt;/li&gt;</p> 
                  <p className={classes.li}>&lt;li&gt;Ruby & Ruby on Rails specialist&lt;/li&gt;</p> 
                  <p className={classes.li}>&lt;li&gt;JavaScript & NodeJS enthusiast&lt;/li&gt;</p> 
                <p className={classes.ul}>&lt;/ul&gt;</p>
              <p className={classes.body}>&lt;/body&gt;</p>
            <p className={classes.html}>&lt;/html&gt;</p>
          </code>
        </div>
      </div>
    </Fragment>
  );
}
export default HomePageMain;
