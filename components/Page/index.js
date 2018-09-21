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
          As your commissioner I want to make sure that DC & Ward 5 is a place
          for everyone. Both new and longtime residents should feel that they
          belong in the community, will benefit from development, and prosper in
          the District. Development is not a “winner take all” game and all
          neighborhood residents should benefit.
        </p>
      </div>
      <SC.ClearBoth />
    </SC.Hero>
    <SC.Section id="goals">
      <SC.DivideLine color="blue" />
      <h2>Goals</h2>
      <p>
        <span>Reduce Cost of Living</span> - In Ward 5, much like other parts of
        the city, rising cost of living is beginning to push people out in favor
        of newer residents. I will fight to actively combat this as your
        commissioner. By advocating for mixed use dwellings and alternative
        forms of home ownership and development, we can redevelop areas that
        have long been neglected without driving up home values or displacing
        longtime residents
      </p>
      <p>
        <span>Increased Mobility</span> - I will support initiatives that
        increase the mobility of my constituents as they move throughout the
        District. I believe that with any combination of Road Diets, Complete
        Streets and bike lanes, we can decrease congestion and lower commute
        times for our residents.
      </p>
      <p>
        <span>Open Communication & Civic Engagement</span> - I will use my
        technical skills to ensure full transparency and rapid responses in
        communication between the community and my fellow commissioners. By
        using and building software solutions we can make sure all members of
        the community stay informed and engaged.
      </p>
    </SC.Section>
    <SC.Section background="grey">
      <SC.DivideLine color="red" />
      <h2>About Romello Goodman</h2>
      <p>
        Two years ago I moved to DC from Southern California and, in my short
        time as a DC transplant, I have seen the city change drastically. With
        each new building, longtime residents are pushed out as new residents
        move in. I am running for ANC to combat and prevent this displacement.
        As your commissioner, I will keep an open line of communication with my
        constituents and support policies that benefit the whole, not just the
        few.
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
