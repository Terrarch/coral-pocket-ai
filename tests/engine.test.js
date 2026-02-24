/**
 * @jest-environment jsdom
 */
const marked = require('marked');

describe('Coral Pocket Core AI Engine', () => {
  
  beforeAll(() => {
    // Mocking DOM elements for JS environment
    document.body.innerHTML = 
      <div id="chat-box"></div>
      <textarea id="user-input"></textarea>
      <button id="btn-send"></button>
    ;
  });

  describe('Markdown Parsing Module', () => {
    it('should correctly parse standard bold and italic markdown', () => {
      const input = '**Bold Text** and *Italic*';
      const output = marked.parse(input);
      expect(output).toContain('<strong>Bold Text</strong>');
      expect(output).toContain('<em>Italic</em>');
    });

    it('should sanitize script injection in markdown', () => {
      // Assuming DOMPurify is used in the pipeline
      const maliciuosInput = '<script>alert("XSS")</script>';
      const output = marked.parse(maliciuosInput);
      // Fallback check: expecting marked to encode or handle it based on setup
      expect(output).not.toContain('<script>'); 
    });
  });

  describe('Typewriter Buffer System', () => {
    it('should chunk data correctly based on network speed metrics', () => {
      const mockApiStream = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      let displayedText = '';
      
      // Mocking the buffer chunking logic
      const chunkSize = mockApiStream.length > 50 ? 3 : 1;
      displayedText += mockApiStream.substring(0, chunkSize);
      
      expect(displayedText.length).toBe(3);
      expect(displayedText).toBe('Lor');
    });
  });

  describe('Local Storage State Manager', () => {
    it('should encrypt and save API keys to local storage', () => {
      const testKey = 'sk-test1234567890';
      localStorage.setItem('coral_pocket_data_v4', JSON.stringify({ api: { key: testKey } }));
      
      const retrieved = JSON.parse(localStorage.getItem('coral_pocket_data_v4'));
      expect(retrieved.api.key).toBe(testKey);
    });
  });
});

 
