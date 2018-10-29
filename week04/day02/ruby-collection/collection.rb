foods =["taco","pizza","celery"]

foods=Array.new

foods =Array.new(3)

foods =Array.new(3,true) #all values true

foods = Array.new(2){Array.new(3,"taco")}

arr = [1,2,3,4,5,6]

p arr[2]

p arr[-1] # bring last number
p arr[2,3]#3,4,5 #start from 2 and bring 3 next of it

p arr[1..4]

p arr.first
p arr.last
p arr.take(3)# first three
p arr.drob(3)# last three
p arr

arr.push(7)
arr << 8 #shavel it add 8 to arr

arr.unshift(0) # to add it to begining

arr.insert(3,"moath")# add moath to position 3
arr.insert(3,"moath","second","third")# add list of string to position 3

arr.pop # remove last element and return it back

arr.delete_at(2) # remove specific position

arr = ["foo",0,nil,"bar",7,"ping",nil,"plong"]
arr.compact #remove null(nil) values as return
arr.compact! #remove null(nil) values change orginal ==> !

arr = [2,5,7,2,7,6,9,11,2,7]
p arr.uniq #to remove repeating values

arr.each do |num|
    puts num
end

arr.each { |num| puts num } # one line
arr.each { |num| puts "banana" if  num == 2 } # one line

arr.reverse_each do |num| #from back to front
    puts num
end

arr.reverse_each { |num| puts num } # one line


numbers = [1,2,3,4,5,6,7]
numbers_times_two = numbers.map {|number| 2*number}
puts numbers_times_two

for i in 0..(numbers.length-1)
    p numbers[i]
end

numbers.select{ |number| number > 4}
numbers.reject{ |number| number > 4}
numbers.reject!{ |number| number > 4}

numbers.delete_if{ |number| number > 4}
numbers.keep_if{ |number| number > 4}
array1 = ["x","y","z",]

array3 = array1 | array2
array3 = array1 & array2
array3 = array1 - array2
p array3

