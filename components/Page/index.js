import React from 'react';

import * as SC from './styles.js';

export default () => (
  <>
    <SC.Header>
      <p class="title">Welcome Neighbor!</p>
      <SC.HeaderLinks>
        <a href="#goals">
          <p>Goals</p>
        </a>
        <a href="#press">
          <p>Press</p>
        </a>
        <a
          href="https://twitter.com/romellogoodman"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>Twitter</p>
        </a>
        <a href="mailto:romellogoodman@gmail.com">
          <span>Contact</span>
        </a>
      </SC.HeaderLinks>
    </SC.Header>
    <SC.Hero>
      <div class="photo">
        <img src="/static/image.jpeg" alt="Romello Goodman" />
      </div>
      <div>
        <SC.DivideLine color="red" />
        <h1>
          Romello Goodman
          <span>Candidate for ANC 5D06</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nisl
          laoreet, venenatis orci id, cursus lectus. Sed vehicula velit urna, ac
          sagittis enim auctor at. Mauris laoreet volutpat quam, quis pretium
          orci ornare vitae. Morbi luctus orci leo, eu commodo nibh dignissim
          sed. Etiam ullamcorper luctus dignissim.
        </p>
      </div>
      <SC.ClearBoth />
    </SC.Hero>
    <SC.Section id="goals">
      <SC.DivideLine color="blue" />
      <h2>Goals</h2>
      <p>
        <span>Blurb Blurb Blurb</span> Curabitur rutrum efficitur dolor ut
        rhoncus. Pellentesque a purus in nulla scelerisque commodo eu et ex.
        Proin lacinia arcu non dui aliquam lacinia.
      </p>
      <p>
        <span>Blurb Blurb Blurb</span> Morbi vel dapibus orci, in sagittis
        velit. Cras eget neque eu massa finibus scelerisque sed in nisl. Quisque
        vitae sapien at ipsum pretium ullamcorper volutpat in est.
      </p>
      <p>
        <span>Blurb Blurb Blurb</span> Nulla ut mollis dui. Cras gravida dolor
        sit amet ex vestibulum, vitae eleifend orci tempor. Proin rhoncus ornare
        orci, nec pulvinar nunc euismod dapibus.
      </p>
    </SC.Section>
    <SC.Section background="grey">
      <SC.DivideLine color="red" />
      <h2>About Romello Goodman</h2>
      <p>
        Duis laoreet eget ipsum ut elementum. Aliquam dapibus ipsum a cursus
        dictum. Mauris sed metus in massa luctus feugiat in eu erat. Fusce
        fermentum nec urna a aliquam. Quisque dignissim pellentesque accumsan.
        Ut tristique pretium ipsum in vehicula. Ut mauris magna, malesuada id
        tempor non, accumsan nec nulla. In nisi leo, molestie et elementum quis,
        pulvinar et quam. Mauris mattis felis ac tellus cursus maximus. In non
        laoreet mi.
      </p>
    </SC.Section>
    <SC.Section id="press">
      <SC.DivideLine color="blue" />
      <h2>Press</h2>
      <SC.Link
        href="https://ggwash.org/files/Ward5_FINAL_PDF_09182018_2018_Greater_Greater_Washington_ANC_Candidate_Questionnaire.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        September 19, 2018 - Greater Greater Washington
      </SC.Link>
      <SC.Link
        href="http://www.thedcvoice.com/romello-goodman-candidate-for-anc-5d06-commissioner/"
        rel="noopener noreferrer"
        target="_blank"
      >
        September 17, 2018 - DC Voice
      </SC.Link>
    </SC.Section>
    <SC.Footer>
      <p>Paid for by Romello Goodman</p>
    </SC.Footer>
  </>
);
