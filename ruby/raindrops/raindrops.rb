class Raindrops
  def self.convert(x)
    sound = ''
    sound += 'Pling' if x%3 === 0
    sound += 'Plang' if x%5 === 0
    sound += 'Plong' if x%7 === 0
    return x.to_s if sound === ''
    return sound
  end
end
