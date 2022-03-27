class Shrine {
    constructor ( 
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        monuments,
        steps,
        religion,
        gods,
        prefecture,
        address
      ) {
          this.id = id;
          this.categoryIds = categoryIds;
          this.title = title;
          this.affordability = affordability;
          this.complexity = complexity;
          this.imageUrl = imageUrl;
          this.duration = duration;
          this.monuments = monuments;
          this.steps = steps;
          this.religion = religion;
          this.gods = gods;
          this.prefecture = prefecture;
          this.address = address;
  
      }
  }
  
  export default Meal
  