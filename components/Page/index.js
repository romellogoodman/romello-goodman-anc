import React from 'react';

import * as SC from './styles.js';

export default () => (
  <>
    <SC.Header>
      <p>Welcome Neighbor!</p>
      <SC.HeaderLinks>
        <a href="#goals">
          <p>Goals</p>
        </a>
        <a href="#press">
          <p>Press</p>
        </a>
        <a href="mailto:romellogoodman@gmail.com">
          <p>Email</p>
        </a>
        <a
          href="https://twitter.com/romellogoodman"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>Twitter</p>
        </a>
      </SC.HeaderLinks>
    </SC.Header>
    <SC.Blurb>
      <img src="/static/image.jpg" alt="Romello Goodman" />
      <h1>
        Romello Goodman
        <span>Candidate for ANC 5D06</span>
        <SC.SpanLine />
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nisl
        laoreet, venenatis orci id, cursus lectus. Sed vehicula velit urna, ac
        sagittis enim auctor at. Mauris laoreet volutpat quam, quis pretium orci
        ornare vitae. Morbi luctus orci leo, eu commodo nibh dignissim sed.
        Etiam ullamcorper luctus dignissim.
      </p>
      <SC.Link
        href="https://www.google.com/maps/d/u/0/viewer?mid=1kJ5Nxm0qatvXvpcxDTuqjWN7FvU&ll=38.907147864035046%2C-76.98012829999999&z=14"
        rel="noopener noreferrer"
        target="_blank"
      >
        Where is 5D06?
      </SC.Link>
      <SC.Link
        href="https://www.dcboe.org/Voters/Register-To-Vote/Check-Voter-Registration-Status"
        rel="noopener noreferrer"
        target="_blank"
      >
        Check my voter status
      </SC.Link>
      <SC.ClearBoth />
    </SC.Blurb>
    <SC.Section id="goals">
      <p>Goals</p>
      <p>
        Curabitur rutrum efficitur dolor ut rhoncus. Pellentesque a purus in
        nulla scelerisque commodo eu et ex. Proin lacinia arcu non dui aliquam
        lacinia.
      </p>
      <p>
        Morbi vel dapibus orci, in sagittis velit. Cras eget neque eu massa
        finibus scelerisque sed in nisl. Quisque vitae sapien at ipsum pretium
        ullamcorper volutpat in est.
      </p>
      <p>
        Nulla ut mollis dui. Cras gravida dolor sit amet ex vestibulum, vitae
        eleifend orci tempor. Proin rhoncus ornare orci, nec pulvinar nunc
        euismod dapibus.
      </p>
    </SC.Section>
    <SC.Section id="press">
      <p>About Romello Goodman</p>
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
      <p>Press</p>
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
  </>
);
