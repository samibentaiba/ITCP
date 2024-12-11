import React from "react";

function ProblemSection(){

    return (
        <div style={{width: 1440, height: 668, paddingLeft: 64, paddingRight: 64, paddingTop: 32, paddingBottom: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
  <div style={{alignSelf: 'stretch', paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, borderBottom: '1px #414141 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{flex: '1 1 0', height: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
      <div style={{width: 44, color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Status</div>
      <div style={{width: 524, color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Title</div>
    </div>
    <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
      <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Accuracy</div>
      <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Difficulty</div>
    </div>
  </div>
  <div style={{alignSelf: 'stretch', height: 504, paddingTop: 12, paddingBottom: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#32D74B'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#32D74B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Easy</div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#E7E7E7'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#FFD60A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Medium</div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#E7E7E7'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#FF453A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Hard</div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#E7E7E7'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#32D74B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Easy</div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#E7E7E7'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#FFD60A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Medium</div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#E7E7E7'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#FF453A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Hard</div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#E7E7E7'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#32D74B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Easy</div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#E7E7E7'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#FFD60A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Medium</div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#E7E7E7'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#FF453A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Hard</div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <div style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
          <div style={{height: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#E7E7E7'}}></div>
            </div>
          </div>
          <div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Problem title</div>
        </div>
        <div style={{flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#E7E7E7', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>100%</div>
          <div style={{flex: '1 1 0', textAlign: 'center', color: '#32D74B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Easy</div>
        </div>
      </div>
    </div>
  </div>
  <div style={{width: 1312, borderTop: '1px #414141 solid', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div style={{width: 256, paddingTop: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
      <div style={{width: 256, height: 8, position: 'relative', background: 'rgba(255, 255, 255, 0.12)', borderRadius: 50, overflow: 'hidden'}}>
        <div style={{width: 25.60, height: 8, left: 0, top: 0, position: 'absolute', background: '#0A84FF', borderRadius: 50}} />
      </div>
      <div style={{alignSelf: 'stretch', color: '#929292', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>1/10 problems solved</div>
    </div>
    <div style={{paddingTop: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
      <div style={{width: 24, height: 24, position: 'relative'}}>
        <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#FF453A'}}></div>
      </div>
      <div style={{color: '#FF453A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Focus on refining your solutions to improve your score.</div>
    </div>
  </div>
</div>
    )
}
export default ProblemSection