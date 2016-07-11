class Pangram
  def self.is_pangram?(string)
    formattedString = string.chars.sort.join.squeeze.downcase
    # sort alphabetically, remove repeated letters, downcase
    if formattedString.include? 'abcdefghijklmnopqrstuvwxyz'
      true
    else
      false
    end
  end
end
