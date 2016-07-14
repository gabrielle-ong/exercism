class Pangram
  def self.is_pangram?(string)
    # first downcase, then sort alphabetically, then remove repeated letters
    formatted_string = string.downcase.chars.sort.join.squeeze

    formatted_string.include? 'abcdefghijklmnopqrstuvwxyz'

    #SOLUTION 2: credits to @wayneangoh
     ('a'..'z').all? { |char| str.downcase.include?(char) }
  end
end
