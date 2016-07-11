class Hamming
  def self.compute(string1, string2)
    if string1.length != string2.length
      raise ArgumentError
    end
    i = 0
    count = 0
    while i < string1.length
      if string1[i] != string2[i]
        count += 1
      end
      i += 1
    end
    count
  end
end

module BookKeeping
  VERSION = 3
end
