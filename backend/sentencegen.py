import MySQLdb
import MySQLdb.cursors
import random

import credentials

conn = MySQLdb.connect(
		user=credentials.db_user,
		passwd=credentials.db_pass,
		db=credentials.db_name,
		cursorclass=MySQLdb.cursors.DictCursor,
		use_unicode=True
		)

def sentencegen(key):
	if key[0] != '<' or key[-1] != '>':
		return key
	key = key[1:-1]

	with conn as cur:
		cur.execute('SELECT fragment, weight FROM sentencegen WHERE code = %s', (key,))
		fragment = None
		total = 0
		for row in cur:
			total += row['weight']
			if random.randint(0, total) <= row['weight']:
				fragment = row['fragment']

		if fragment is None: # no db matches
			return key # handle primitives we havent defined yet

		sentence = map(lambda x: sentencegen(x) if (len(x)>2 and x[0]=='<' and x[-1]=='>') else x, fragment.split(' '))
		return ' '.join(sentence)

# TODO list off the top of my head:
# - proper split algorithm
# - dont take off <>
# - support alternate db lookups
# - factor skillmin
# - factor skillval, and weight adjustment algorithm

print 'Try:'
print '>>> sentencegen(\'<sentence_a1>\')'
