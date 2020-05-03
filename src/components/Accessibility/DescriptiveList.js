import React from 'react'

const DescriptiveList = () => {
  return (
    <section aria-label="Accessibility Description">
      <h1>Descriptive List</h1>
      <article>
        <dl>
          <dt>Accessibility:</dt>
          <dd>
            <dl>
              <dt>ARIA:</dt>
              <dd>
                <dl>
                  <dt>
                    aria-label:
                  </dt>
                  <dd>
                    Giving label/description to an element.
                  </dd>
                  <dt>
                    aria-labeledby:
                  </dt>
                  <dd>
                    Ids of element(s) to refer the labels.
                  </dd>
                  <dt>aria-expanded</dt>
                  <dd>
                    Helps screenreaders to understand the scenarios like:
                    <ul>
                      <li>Accordian</li>
                      <li>Anything which can collapse and expanded.</li>
                    </ul>
                  </dd>
                </dl>
              </dd>
            </dl>
          </dd>
        </dl>
      </article>
    </section>
  )
}

export default DescriptiveList
