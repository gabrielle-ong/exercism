class Sieve
  def initialize(n)
     @n = n
     @answer = []
   end
   def primes
     #SOLUTION 1: RECURSIVE FUNCTION
     array = Array.new(@n+1, true)
     for i in 2..@n
       if array[i]
         @answer << i
         make_false(i+i, i , array)
       end
     end
     @answer
   end
   private
   def make_false(current, increase, array)
     if current <= @n
       array[current] = false
       make_false(current+increase, increase, array)
     end
   end
 end

 ##SOLUTION 2
  def initialize(n)
    @n = n
    @answer = []
  end
  def primes
    array = Array.new(@n+1, true)
    for i in 2..@n
      if array[i]
         @answer << i
         multiple = i
        while multiple < @n
          multiple += i
          array[multiple] = false
        end
      end
    end
    @answer
  end
end
