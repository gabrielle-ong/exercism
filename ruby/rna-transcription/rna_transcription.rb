class Complement
  def self.of_dna(dna)
    if (dna =~ /[^GACT]/)
      return ''
    else
      dna.tr('GCTA', 'CGAU')
    end

    # SOLUTION 2:
    # rna = ''
    # i = 0
    # while i < dna.length
    #   if (dna[i] == 'G')
    #     rna += 'C'
    #   elsif (dna[i] == 'C')
    #     rna += 'G'
    #   elsif (dna[i] == 'T')
    #     rna += 'A'
    #   elsif (dna[i] == 'A')
    #     rna += 'U'
    #   else
    #     return rna = ''
    #   end
    #   i+=1
    # end
    # return rna
  end
end
