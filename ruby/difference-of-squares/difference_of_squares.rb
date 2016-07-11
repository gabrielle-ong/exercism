class Squares
  def initialize(x)
    @x = x
  end
  def square_of_sum
    @square_sum = (0..@x).reduce(:+)**2
    return @square_sum
  end

  def sum_of_squares
    @sum_square = (0..@x).reduce { |square, x| square + x**2 }
    return @sum_square
  end

  def difference
    #square_of_sum always > sum_of_squares
    @difference = (square_of_sum) - (sum_of_squares)
    return @difference
  end
end
