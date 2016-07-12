class Squares
  def initialize(x)
    @x = x
  end
  def square_of_sum
    @square_sum = (0..@x).reduce(:+)**2
  end

  def sum_of_squares
    @sum_square = (0..@x).reduce { |square, x| square + x**2 }
  end

  def difference
    #square_of_sum always > sum_of_squares
    difference = (square_of_sum) - (sum_of_squares)
  end
end
