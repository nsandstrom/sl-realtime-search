import assert from 'assert';

import CachedStation from 'models/CachedStation'

describe('CachedStation Model Tests', () => {
	describe('N_gram converison', () => {
		let results = 'wwo wor ord wwor word'.split(' ').sort().join(' ')

		let sort = function(result){
			return result.split(' ').sort().join(' ')

		}
		it('should return correct n_grams', done => {
			let n_grams = CachedStation.make_ngrams('wörd')
			assert.equal(results, sort(n_grams));
			done();
		})

		it('should convert to lowcase', done => {
			let n_grams = CachedStation.make_ngrams('WoRD')
			assert.equal(results, sort(n_grams));
			done();
		})

		it('should only keep a-ö', done => {
			let n_grams = CachedStation.make_ngrams('.wo rd!')
			assert.equal(results, sort(n_grams));
			done();
		})

		it('should return short words untouched', done => {
			let short_word = "hi"
			let n_grams = CachedStation.make_ngrams(short_word)
			assert.equal(short_word, n_grams);
			done();
		})
	})
})
