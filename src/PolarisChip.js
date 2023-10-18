import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`

    .cards {
    margin-top: 10px;
    margin-left: 10px;
    height: 564.039px;
    width: 423.328px;
    justify-content: space-around;
    flex-direction: column;
    display: flex;
      }

      .card-container {
    background-color: #9a9a9a;
    width: 100%;
    height: 100%;
  }

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  
  

  .cards img{
    max-width:100%;
  }

  .title {
    font-size: 40px;
  }




    `;
  }

  constructor() {
    super();
    this.title = 'Card Template';
  }

  render() {
    return html`
 
<div class="cards">
  <div class="card-container">
    <div class="card-content">
      <img src="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-10/FluVaccines_HRFeature.jpg?h=09bc788e&itok=KEMIew2T">
      <h2 id="cardTitle">${this.title}</h2>
    </div>
    
    
   
  </div>
</div>


  `;
  }
}
