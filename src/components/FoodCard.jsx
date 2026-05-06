function FoodCard({ product }) {
  const { product_name, brands, nutriments, image_small_url } = product

  return (
    <div className="food-card">
      {/* render the product image if it exists */}
      {image_small_url ? (
        <img src={image_small_url} alt={product_name || 'Food product'} className="food-image" />
      ) : (
        <div className="food-image-placeholder">No image available</div>
      )}

      {/* render the product name */}
      {product_name ? <h2>{product_name}</h2> : <h2>Unknown Product</h2>}

      {/* render the brand */}
      {brands && <p className="brand"><strong>Brand:</strong> {brands}</p>}

      {/* render calories, protein, carbs, fat from nutriments */}
      {nutriments && (
        <div className="nutriments">
          {nutriments?.['energy-kcal_100g'] && (
            <p><strong>Calories:</strong> {nutriments['energy-kcal_100g']} kcal/100g</p>
          )}
          {nutriments?.protein_100g && (
            <p><strong>Protein:</strong> {nutriments.protein_100g}g/100g</p>
          )}
          {nutriments?.carbohydrates_100g && (
            <p><strong>Carbs:</strong> {nutriments.carbohydrates_100g}g/100g</p>
          )}
          {nutriments?.fat_100g && (
            <p><strong>Fat:</strong> {nutriments.fat_100g}g/100g</p>
          )}
        </div>
      )}
    </div>
  )
}

export default FoodCard
