text1 = "GAGCCTACTAACGGGAT"
text2 = "CATCGTAATGACGGCCT"
  counter = 0
for i in 0..text1.length do
if text1[i] != text2[i]
    counter+=1
end
end
puts "The Hamming distance between these two DNA strands is #{counter}." 