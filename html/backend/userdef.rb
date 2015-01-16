# encoding: utf-8

class User
	def initialize(id, name, targetLang, level)
		@myID = id
		@myName = name
		@myTarget = targetLang
		@myLevel = level
	end
end

me = User.new("0", "Wedjat", "Japanese", "1")

puts me.@myID
puts me.myLevel
#me.myLevel++
#puts me.myLevel