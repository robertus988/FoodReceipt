class FoodItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :host {
        display: block;
        padding: 5px;
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }

      h2 {
        margin-bottom: 10px;
      }
      
      .meal-thumb {
          width: 100%;
          max-height: 350px;
          object-fit: cover;
          object-position: center;
      }
      
      .food-info {
          padding: 15px;
      }
      
      .food-info > h2 {
          font-weight: lighter;
      }
      
      .food-info > p {
          margin-top: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
      }
    </style>  
    <h2>${this._food.strMeal}</h2>
    <img class="meal-thumb" src="${this._food.strMealThumb}" alt="Meal Thumb">
    <div class="food-info">
      <p><h2>Receipt : </h2>${this._food.strInstructions}</p>
    </div>`;
  }
}

customElements.define("food-item", FoodItem);