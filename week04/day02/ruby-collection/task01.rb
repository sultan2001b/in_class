# work_days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

# # p work_days

# work_days.unshift work_days.pop

# # p work_days

# new_arr = [["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], ["friday", "saturday"]]

# # p new_arr

# resulted_arr = new_arr[0] - new_arr[1]

# # p resulted_arr

# # p resulted_arr.sort!

# numbers = [5, 10, 18, 4, 22]

# #1. output an array that is [10,20,36,8,44]
# #2. creat an array that is the same length where each number is multiplied by a random number

# p numbers.map { |number| number * 2 }
# p numbers.map { |number| number * rand(0..10) }

# foods = ["taco", "pizza", "celery"]
# p foods.map { |food| food.capitalize + "!" }

# sum_nums1 = numbers.reduce(0) do |total_sum, current_num|
#     total_sum+current_num
# end

# sum_nums2 = numbers.reduce(0) { |total_sum, current_num|    total_sum+current_num}

# p sum_nums1
# p sum_nums2

# added = numbers.reduce(:+)
# multiplied = numbers.reduce(:*)

# p added
# p multiplied
# numbers.each do |el|
#     #code
#     count +=#value
#     end

my_hash = {}
chair = {
  wheels: 5,
  height: {
    measurment: 175,
    unit: "cm",
  },
  type: "office chair",
  arm_rests: true
}
# p chair[:wheels]
# chair.default = "ddd"
# p chair[:doors]

# p "test".object_id

#classic hash old not used currently
# chair2 {
#     :wheels => 5,
#     :height => {
#         :measurement => 175,
#         :unit => "cm"
#     },
#     :type => "office chair",
#     :arm_rests => true,
# }

# chair[:person] = true
# p chair
# chair.delete(:person)
# p chair

# chair.each do |all|
#     puts all
# end

# chair.each do |key, value|
#     p "here is the key, #{key} which has a value, #{value}"
# end

# chair.keys do |key|
# #the code
# end

students = [
  {
    first: 'Faisal',
    last:'Al-Qahtani',
    class: 'WDI'
  },
  { 
    first: 'Mada',
    last: 'Alwuthaynani',
    class: 'WDI'
  },
  {
    first: 'Njod',
    last: 'Alnasser',
    class: 'WDI'
  },
  {
    first: 'Atheer',
    last: 'Minwar',
    class: 'WDI'
  },
  {
    first: 'Halimah',
    last: 'Alshahrani',
    class: 'WDI'
  },
  {
    first: 'Rawan',
    last: 'Albahouth',
    class: 'WDI'
  },
  {
    first: 'Sami',
    last: 'Aldahlawi',
    class: 'WDI'
  },
  {
    first: 'Noura',
    last: 'Alsubaie',
    class: 'WDI'
  },
  {
    first: 'Noura',
    last: 'Alhadlaq',
    class: 'WDI'
  },
  {
    first: 'Jafar',
    last: 'Alhajji',
    class: 'WDI'
  },
  {
    first: 'Dalal',
    last: 'Saeed',
    class: 'WDI'
  },
  {
    first: 'Alanoud',
    last: 'AlRasheed',
    class: 'WDI'
  },
  {
    first: 'Razan',
    last: 'Almusa',
    class: 'WDI'
  },
  {
    first: 'Leana',
    last: 'Alqurashi',
    class: 'WDI'
  },
  {
    first: 'Sarah',
    last: 'AlFadly',
    class: 'WDI'
  },
  {
    first: 'Mashael',
    last: 'Almosallam',
    class: 'WDI'
  },
  {
    first: 'Wafa',
    last: 'Alturaifi',
    class: 'WDI'
  },
  {
    first: 'Abdullah',
    last: 'AlQahtani',
    class: 'WDI'
  },
  {
    first: 'Sultan',
    last: 'Alsamaani',
    class: 'WDI'
  },
  {
    first: 'Thekra',
    last: 'Alowais',
    class: 'WDI'
  },
  {
    first: 'Sarah',
    last: 'Alasadi',
    class: 'WDI'
  },
  {
    first: 'Mohammed',
    last: 'abdulqader',
    class: 'WDI'
  },
  {
    first: 'Saud',
    last: 'Almotairy',
    class: 'WDI'
  },
  {
    first: 'Mansour',
    last: 'Bin Suqayan',
    class: 'WDI'
  },
  {
    first: 'Haya',
    last: 'AlMousa',
    class: 'WDI'
  },
  {
    first: 'Ali',
    last: 'Alsubaie',
    class: 'WDI'
  }
]

# p students

p students.select {
    |a| a[:last][0].downcase != "a"
}