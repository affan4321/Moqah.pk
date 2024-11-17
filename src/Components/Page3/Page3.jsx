import React from 'react'
import './Page3.css'
import Steps from './Steps/Steps';
import tickIcon from "../../assets/tick.png";

const stepData = [
  {heading: "Request", description: ["Submit your Listing", "requests one at a time", "through our", "Create your event form"]},
  {heading: "Receive", description: ["Get a response from our team in 1-2 hours", "or less. We ensure fast,", "precise delivery of your", "tailored event lisiting task."]},
  {heading: "Approval ", description: ["Enjoy your newly designed Custom Landing event page", "request unlimited revisions", "until it's exactly to your", "liking."]}
];

const Page3 = ({plansPricingRef}) => {
  return (
    <div className="pg3">
      <div className="container">
        <div className="processH">
          <h1>Your dream event From concept to reality in <span>2 Hours</span> or less</h1>
        </div>
        <div className="processp">
          <p>Get your Customized event URL links and post on your social media accounts<br/>
          your private and personal Events will be personalized and listed with just a few key details .</p>
        </div>
        <div className="steps">
          {
            stepData.map((step, index) => {
              return (
                <Steps 
                  key={index}
                  step={{
                    ...step,
                    description: step.description.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))
                  }} 
                  index={index} 
                />
              )
            })
          }
        </div>
        <section ref={plansPricingRef}>
          <div className="pricing">
            <div className="col1">
              <h2>Pricing</h2>
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                <label class="btn btn-primary" for="btnradio1">Weekly</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label class="btn btn-primary" for="btnradio2">Monthly</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label class="btn btn-primary" for="btnradio3">Annually</label>
              </div>
              <h3>WHAT'S INCLUDED</h3>
              <div className="options">
                <p>Event Cover Image </p>
                <p>Consolidated event Information</p>
                <p>Customized URL</p>
                <p>Standard Placement</p>
                <p>Customized Call to Action Button</p>
                <p>Social Media post</p>
                <p>On Page SEO</p>
                <p>Video Listing </p>
                <p>User visit and click statistics</p>
                <p>Emailed Analytics results</p>
              </div>
            </div>
            <div className="col2">
              <h2>Basic</h2>
              <p>Great for basic listing needs</p>
              <h2>FREE</h2>
              <h4>SINGLE USAGE</h4>
              <input className='btn btn-outline-primary' type="button" value="GET LISTED" />
              <p>single standard</p>
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <p>events detail page only</p>
            </div>
            <div className="col3">
              <div className="popular">Most popular!</div>
              <h2>Conversion Focus</h2>
              <p>Great for Focused event needs</p>
              <h2>RS. 1500</h2>
              <h4>PER WEEK</h4>
              <input className='btn btn-outline-primary' type="button" value="GET LISTED" />
              <p>2-3 custom Images</p>
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <p>Featured on Home</p>
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <p>Standard</p>
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
            </div>
            <div className="col4">
              <div className="bestValue">Best Valued</div>
              <h2>Conversion Max</h2>
              <p>Ideal for advanced and maximum event needs</p>
              <h2>RS. 2500</h2>
              <h4>PER WEEK</h4>
              <input className='btn btn-outline-primary' type="button" value="GET LISTED" />
              <p>3 custom Images</p>
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <p>Featured on Home & Discover</p>
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <p>Advanced</p>
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
            </div>
            <div className="col5">
              <h2>Custom Quotes</h2>
              <p>Need a custom plan? Your solution is just a message away!</p>
              <input className='btn btn-outline-primary' type="button" value="CONTACT US!" />
              <p>single standard</p>
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <img className="tickIcon" src={tickIcon} alt="tickIcon" />
              <p>events detail page only</p>
            </div>
          </div>

          <div className="pricingSmall">
              <div className="col1">
                <h2>Pricing</h2>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                  <label class="btn btn-primary" for="btnradio1">Weekly</label>
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                  <label class="btn btn-primary" for="btnradio2">Monthly</label>
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                  <label class="btn btn-primary" for="btnradio3">Annually</label>
                </div>
              </div>

              <div className="col2">
                <h2>Basic</h2>
                <p>Great for basic listing needs</p>
                <h2>FREE</h2>
                <h4>SINGLE USAGE</h4>
                <input className='btn btn-outline-primary' type="button" value="GET LISTED" />
                <p><u>Event Cover Image:</u> single standard</p>
                <p><u>Consolidated event Information</u></p>
                <p><u>Customized URL</u></p>
                <p><u>Standard Placement:</u> detail page only</p>
              </div>

              <div className="col3">
                <div className="popular">Most popular!</div>
                <h2>Conversion Focus</h2>
                <p>Great for Focused event needs</p>
                <h2>RS. 1500</h2>
                <h4>PER WEEK</h4>
                <input className='btn btn-outline-primary' type="button" value="GET LISTED" />
                <p><u>Event Cover Image:</u> 2-3 custom Images</p>
                <p><u>Consolidated event Information</u></p>
                <p><u>Customized URL</u></p>
                <p><u>Standard Placement:</u> Featured on Home</p>
                <p><u>Customized Call to Action Button</u></p>
                <p><u>Social Media post</u></p>
                <p><u>On Page SEO:</u> Standard</p>
                <p><u>Video Listing</u></p>
              </div>

              <div className="col4">
                <div className="bestValue">Best Valued</div>
                <h2>Conversion Max</h2>
                <p>Ideal for advanced and maximum event needs</p>
                <h2>RS. 2500</h2>
                <h4>PER WEEK</h4>
                <input className='btn btn-outline-primary' type="button" value="GET LISTED" />
                <p><u>Event Cover Image:</u> 3 custom Images</p>
                <p><u>Consolidated event Information</u></p>
                <p><u>Customized URL</u></p>
                <p><u>Standard Placement:</u> Featured on Home & Discover</p>
                <p><u>Customized Call to Action Button</u></p>
                <p><u>Social Media post</u></p>
                <p><u>On Page SEO:</u> Advanced</p>
                <p><u>Video Listing</u></p>
                <p><u>User visit and click statistics</u></p>
                <p><u>Emailed Analytics results</u></p>
              </div>

              <div className="col5">
                <h2>Custom Quotes</h2>
                <p>Need a custom plan? Your solution is just a message away!</p>
                <input className='btn btn-outline-primary' type="button" value="CONTACT US!" />
                <p><u>Event Cover Image:</u> single standard</p>
                <p><u>Consolidated event Information</u></p>
                <p><u>Customized URL</u></p>
                <p><u>Standard Placement:</u> events detail page only</p>
              </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Page3